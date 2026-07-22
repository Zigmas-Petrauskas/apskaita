import PropTypes from "prop-types";
import "./Input.scss";

const Input = ({ id, label, type = "text", error, ...props }) => {
  return (
    <div className="input-field">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} {...props} />
      {error && <span role="alert">{error}</span>}
    </div>
  );
};

Input.protTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  error: PropTypes.string,
};

export default Input;
