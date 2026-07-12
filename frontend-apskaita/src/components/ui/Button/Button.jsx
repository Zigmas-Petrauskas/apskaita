import ClipLoader from "react-spinners/ClipLoader";
import "./Button.scss";

const Button = ({
  children,
  loading = false,
  disabled = false,
  type = "button",
  arialabel,
}) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-label={arialabel || (loading ? "Vykdoma operacija" : children)}
      className="button"
    >
      {loading ? <ClipLoader size={18} aria-label="Kraunama" /> : children}
    </button>
  );
};

export default Button;
