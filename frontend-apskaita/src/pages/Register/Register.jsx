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

    Todėl nuo pradžių atskiriame
    įmonės ir vartotojo duomenis.
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
      3. Sugeneruos password hash
      4. Paruoš 2FA aktyvavimą


      Dabar siunčiame duomenis į hook.
    */

    registerCompany(data);
  };

  return (
    <main className="register">
      <section className="register-container">
        <header className="register-header">
          <h1>Įmonės registracija</h1>

          <p>Sukurkite savo MB darbo aplinką</p>
        </header>

        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="register-section">
            <h2>Įmonės duomenys</h2>

            <div className="register-field">
              <label htmlFor="companyName">Įmonės pavadinimas</label>

              <input
                id="companyName"
                type="text"
                {...register("companyName")}
              />

              {errors.companyName && <span>{errors.companyName.message}</span>}
            </div>

            <div className="register-field">
              <label htmlFor="companyCode">Juridinio asmens kodas</label>

              <input
                id="companyCode"
                type="text"
                {...register("companyCode")}
              />

              {errors.companyCode && <span>{errors.companyCode.message}</span>}
            </div>

            <div className="register-field">
              <label htmlFor="vatCode">PVM mokėtojo kodas</label>

              <input id="vatCode" type="text" {...register("vatCode")} />
            </div>

            <div className="register-field">
              <label htmlFor="address">Adresas</label>

              <input id="address" type="text" {...register("address")} />

              {errors.address && <span>{errors.address.message}</span>}
            </div>

            <div className="register-field">
              <label htmlFor="companyPhone">Telefonas</label>

              <input
                id="companyPhone"
                type="tel"
                {...register("companyPhone")}
              />
            </div>

            <div className="register-field">
              <label htmlFor="companyEmail">Įmonės el. paštas</label>

              <input
                id="companyEmail"
                type="email"
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
                {...register("ownerFirstName")}
              />

              {errors.ownerFirstName && (
                <span>{errors.ownerFirstName.message}</span>
              )}
            </div>

            <div className="register-field">
              <label htmlFor="ownerLastName">Pavardė</label>

              <input
                id="ownerLastName"
                type="text"
                {...register("ownerLastName")}
              />
            </div>

            <div className="register-field">
              <label htmlFor="ownerEmail">El. paštas</label>

              <input id="ownerEmail" type="email" {...register("ownerEmail")} />

              {errors.ownerEmail && <span>{errors.ownerEmail.message}</span>}
            </div>

            <div className="register-field">
              <label htmlFor="ownerPassword">Slaptažodis</label>

              <input
                id="ownerPassword"
                type="password"
                {...register("ownerPassword")}
              />

              {errors.ownerPassword && (
                <span>{errors.ownerPassword.message}</span>
              )}
            </div>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Kuriama..." : "Sukurti paskyrą"}
          </button>
        </form>
      </section>
    </main>
  );
};

export default Register;
