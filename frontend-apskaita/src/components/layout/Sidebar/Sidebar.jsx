import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaUsers } from "react-icons/fa";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-menu">
        <NavLink to="/dashboard">
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/users">
          <FaUsers />
          <span>Vartotojai</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
