import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaLock, FaUser } from "react-icons/fa";
import Button from "../../components/ui/Button/Button";
import loginSchema from "../../schemas/login.schema";
import useLogin from "../../hooks/useLogin";
import "./Login.scss";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const { loginUser, loading } = useLogin();

  const onSubmit = (data) => {
    loginUser(data);
  };

  return (
    <main className="login">
      <section className="login-container" aria-labelledby="login-title">
        <header className="login-header">
          <p>Prisijunkite prie apskaitos sistemos</p>
        </header>

        <form
          className="login-form"
          aria-label="Prisijungimo forma"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="login-field">
            <label htmlFor="username">Vartotojo vardas</label>
            <div className="input-wrapper">
              <FaUser aria-hidden="true" />

              <input
                id="username"
                type="text"
                autoComplete="username"
                aria-label="Vartotojo vardas"
                aria-invalid={errors.username ? "true" : "false"}
                aria-describedby={
                  errors.username ? "username-error" : undefined
                }
                {...register("username")}
              />
            </div>

            {errors.username && (
              <span id="username-error" role="alert">
                {errors.username.message}
              </span>
            )}
          </div>

          <div className="login-field">
            <label htmlFor="password">Slaptažodis</label>
            <div className="input-wrapper">
              <FaLock aria-hidden="true" />

              <input
                id="password"
                type="password"
                autoComplete="current-password"
                aria-label="Slaptažodis"
                aria-invalid={errors.password ? "true" : "false"}
                aria-describedby={
                  errors.password ? "password-error" : undefined
                }
                {...register("password")}
              />
            </div>

            {errors.password && (
              <span id="password-error" role="alert">
                {errors.password.message}
              </span>
            )}
          </div>

          <Button
            type="submit"
            loading={loading}
            ariaLabel="Prisijungti prie sistemos"
          >
            Prisijungti
          </Button>

          <div className="login-register">
            <p>
              Neturite paskyros? <Link to="/register">Registuokis</Link>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;
