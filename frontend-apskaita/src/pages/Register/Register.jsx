import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import "./Register.scss";

import registerSchema from "../../schemas/register.schema";
import useRegister from "../../hooks/useRegister";

const Register = () => {
  /*
    Pirmas sistemos vartotojas yra OWNER.

    Dabartinis scenarijus:
    - viena MB
    - vienas pagrindinis naudotojas


    Ateityje:
    Company gali turėti daug Users:

    OWNER
    ACCOUNTANT
    EMPLOYEE
    VIEWER


    Todėl atskiriame:
    - Company duomenis
    - Owner duomenis
  */

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const { registerCompany, loading } = useRegister();

  const onSubmit = (data) => {
    /*
      Ateityje:

      POST /api/company/register


      Backend:
      1. Sukurs Company
      2. Sukurs OWNER vartotoją
      3. Sukurs password hash
      4. Paruoš 2FA aktyvavimą


      Dabar siunčiame duomenis į hook.
    */

    registerCompany(data);
  };

  return (
    <main className="register">
      <section className="register-container" aria-labelledby="register-title">
        <header className="register-header">
          <h1 id="register-title">Įmonės registracija</h1>

          <p>Sukurkite savo MB darbo aplinką</p>
        </header>

        <form
          className="register-form"
          aria-label="Įmonės registracijos forma"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="register-section">
            <h2>Įmonės duomenys</h2>

            <div className="register-field">
              <label htmlFor="companyName">Įmonės pavadinimas</label>

              <input
                id="companyName"
                type="text"
                autoComplete="organization"
                aria-label="Įmonės pavadinimas"
                aria-invalid={errors.companyName ? "true" : "false"}
                aria-describedby={
                  errors.companyName ? "companyName-error" : undefined
                }
                {...register("companyName")}
              />

              {errors.companyName && (
                <span id="companyName-error" role="alert">
                  {errors.companyName.message}
                </span>
              )}
            </div>

            <div className="register-field">
              <label htmlFor="companyCode">Juridinio asmens kodas</label>

              <input
                id="companyCode"
                type="text"
                aria-label="Juridinio asmens kodas"
                aria-invalid={errors.companyCode ? "true" : "false"}
                aria-describedby={
                  errors.companyCode ? "companyCode-error" : undefined
                }
                {...register("companyCode")}
              />

              {errors.companyCode && (
                <span id="companyCode-error" role="alert">
                  {errors.companyCode.message}
                </span>
              )}
            </div>

            <div className="register-field">
              <label htmlFor="vatCode">PVM mokėtojo kodas</label>

              <input
                id="vatCode"
                type="text"
                aria-label="PVM mokėtojo kodas"
                {...register("vatCode")}
              />
            </div>

            <div className="register-field">
              <label htmlFor="address">Adresas</label>

              <input
                id="address"
                type="text"
                autoComplete="street-address"
                aria-label="Įmonės adresas"
                aria-invalid={errors.address ? "true" : "false"}
                aria-describedby={errors.address ? "address-error" : undefined}
                {...register("address")}
              />

              {errors.address && (
                <span id="address-error" role="alert">
                  {errors.address.message}
                </span>
              )}
            </div>

            <div className="register-field">
              <label htmlFor="companyPhone">Telefonas</label>

              <input
                id="companyPhone"
                type="tel"
                autoComplete="tel"
                aria-label="Įmonės telefono numeris"
                {...register("companyPhone")}
              />
            </div>

            <div className="register-field">
              <label htmlFor="companyEmail">Įmonės el. paštas</label>

              <input
                id="companyEmail"
                type="email"
                autoComplete="email"
                aria-label="Įmonės elektroninis paštas"
                {...register("companyEmail")}
              />
            </div>
          </div>

          <div className="register-section">
            <h2>Vadovo paskyra</h2>

            <div className="register-field">
              <label htmlFor="ownerFirstName">Vardas</label>

              <input
                id="ownerFirstName"
                type="text"
                autoComplete="given-name"
                aria-label="Vadovo vardas"
                aria-invalid={errors.ownerFirstName ? "true" : "false"}
                aria-describedby={
                  errors.ownerFirstName ? "ownerFirstName-error" : undefined
                }
                {...register("ownerFirstName")}
              />

              {errors.ownerFirstName && (
                <span id="ownerFirstName-error" role="alert">
                  {errors.ownerFirstName.message}
                </span>
              )}
            </div>

            <div className="register-field">
              <label htmlFor="ownerLastName">Pavardė</label>

              <input
                id="ownerLastName"
                type="text"
                autoComplete="family-name"
                aria-label="Vadovo pavardė"
                {...register("ownerLastName")}
              />
            </div>

            <div className="register-field">
              <label htmlFor="ownerEmail">El. paštas</label>

              <input
                id="ownerEmail"
                type="email"
                autoComplete="email"
                aria-label="Vadovo elektroninis paštas"
                aria-invalid={errors.ownerEmail ? "true" : "false"}
                aria-describedby={
                  errors.ownerEmail ? "ownerEmail-error" : undefined
                }
                {...register("ownerEmail")}
              />

              {errors.ownerEmail && (
                <span id="ownerEmail-error" role="alert">
                  {errors.ownerEmail.message}
                </span>
              )}
            </div>

            <div className="register-field">
              <label htmlFor="ownerPassword">Slaptažodis</label>

              <input
                id="ownerPassword"
                type="password"
                autoComplete="new-password"
                aria-label="Naujas slaptažodis"
                aria-invalid={errors.ownerPassword ? "true" : "false"}
                aria-describedby={
                  errors.ownerPassword ? "ownerPassword-error" : undefined
                }
                {...register("ownerPassword")}
              />

              {errors.ownerPassword && (
                <span id="ownerPassword-error" role="alert">
                  {errors.ownerPassword.message}
                </span>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            aria-label={
              loading ? "Kuriama įmonės paskyra" : "Sukurti įmonės paskyrą"
            }
          >
            {loading ? "Kuriama..." : "Sukurti paskyrą"}
          </button>
        </form>
      </section>
    </main>
  );
};

export default Register;
