import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import "./Header.scss";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <header className="header">
      <h1>MB "Lengvas Kodas" apskaita</h1>

      <div className="header-user">
        <FaUserCircle />
        <span>{user?.username || "Vartotojas"}</span>
        <button>
          <FaSignOutAlt />
        </button>
      </div>
    </header>
  );
};

export default Header;
