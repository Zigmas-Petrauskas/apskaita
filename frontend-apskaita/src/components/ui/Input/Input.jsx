import PropTypes from "prop-types";
import "./Input.scss";

const Input = ({ id, type = "text", placeholder, error, ...props }) => {
  return (
    <div className="input-field">
      <input id={id} type={type} placeholder={placeholder} {...props} />

      {error && <span role="alert">{error}</span>}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default Input;
