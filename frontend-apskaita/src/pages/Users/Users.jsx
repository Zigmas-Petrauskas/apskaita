import { FaUserPlus, FaUsers } from "react-icons/fa";
import "./Users.scss";

const Users = () => {
  return (
    <section className="users">
      <header className="users-header">
        <div>
          <h1>Vartotojai</h1>
          <p>Vartotojų valdymas</p>
        </div>

        <button className="users-add-button">
          <FaUserPlus />
          <span>Naujas vartotojas</span>
        </button>
      </header>

      <div className="users-empty">
        <FaUsers />
        <p>Vartotojų nėra</p>
      </div>
    </section>
  );
};

export default Users;
