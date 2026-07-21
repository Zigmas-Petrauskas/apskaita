import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Lengvas Kodas MB. Visos teisės saugomos.
      </p>
    </footer>
  );
};

export default Footer;
