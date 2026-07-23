import { Link } from "react-router-dom";
import { FaArrowLeft, FaUserPlus, FaEdit, FaTrash } from "react-icons/fa";

import useUsers from "../../hooks/useUsers";
import UserForm from "./UserForm";

import Button from "../../components/ui/Button/Button";

import "./Users.scss";

const Users = () => {
  const { users, deleteUser, showForm, setShowForm, addUser } = useUsers();

  return (
    <section className="users">
      {!showForm && (
        <header className="users-header">
          <div>
            <Link to="/dashboard">
              <FaArrowLeft />
              Grįžti į valdymo skydą
            </Link>

            <h1>Sistemos vartotojai</h1>
          </div>

          <Button
            onClick={() => setShowForm(true)}
            ariaLabel="Pridėti naują vartotoją"
          >
            <FaUserPlus />
            Pridėti vartotoją
          </Button>
        </header>
      )}

      {showForm ? (
        <UserForm closeForm={() => setShowForm(false)} addUser={addUser} />
      ) : (
        <div className="users-list">
          {users.length === 0 ? (
            <p className="users-empty">Sistemoje nėra vartotojų</p>
          ) : (
            users.map((user) => (
              <article className="user-card" key={user.id}>
                <div>
                  <h2>
                    {user.firstName} {user.lastName}
                  </h2>

                  <p>{user.username}</p>

                  <p>{user.role}</p>
                </div>

                <div className="user-actions">
                  <button aria-label="Redaguoti vartotoją">
                    <FaEdit />
                  </button>

                  <button
                    aria-label="Ištrinti vartotoją"
                    onClick={() => deleteUser(user.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </article>
            ))
          )}
        </div>
      )}
    </section>
  );
};

export default Users;
