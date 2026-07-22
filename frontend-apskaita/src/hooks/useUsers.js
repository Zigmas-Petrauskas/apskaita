import { useEffect, useState } from "react";
import {
  fetchUsers,
  deleteUser as removeUser,
} from "../services/users.service";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Užkrauname vartotojus iš DB
  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();

        setUsers(data);
      } catch (error) {
        console.error("Vartotojų gavimo klaida:", error);
      }
    };

    loadUsers();
  }, []);

  // Pridėti vartotoją į sąrašą
  const addUser = (user) => {
    setUsers((currentUsers) => [...currentUsers, user]);
  };

  // Atnaujinti vartotoją sąraše
  const updateUser = (updatedUser) => {
    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.id === updatedUser.id ? updatedUser : user,
      ),
    );
  };

  // Ištrinti vartotoją
  const deleteUser = async (id) => {
    try {
      await removeUser(id);

      setUsers((currentUsers) => currentUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Vartotojo trynimo klaida:", error);
    }
  };

  return {
    users,
    setUsers,
    showForm,
    setShowForm,
    addUser,
    updateUser,
    deleteUser,
  };
};

export default useUsers;
