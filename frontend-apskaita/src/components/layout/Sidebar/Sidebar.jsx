import { NavLink } from "react-router-dom";
import { FaUsers } from "react-icons/fa";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <NavLink to="/users">
          <FaUsers />

          <span>Vartotojai</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
