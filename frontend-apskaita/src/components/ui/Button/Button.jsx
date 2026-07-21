import Loader from "../Loader/Loader";
import "./Button.scss";

const Button = ({
  children,
  loading = false,
  disabled = false,
  type = "button",
  ariaLabel,
}) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-label={ariaLabel || (loading ? "Vykdoma operacija" : children)}
      className="button"
    >
      {loading ? <Loader /> : children}
    </button>
  );
};

export default Button;
