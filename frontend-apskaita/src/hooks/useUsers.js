import { useState } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const addUser = (user) => {
    setUsers((currentUsers) => [...currentUsers, user]);
  };

  const updateUser = (updatedUser) => {
    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.id === updatedUser.id ? updatedUser : user,
      ),
    );
  };

  const deleteUser = (id) => {
    setUsers((currentUsers) => currentUsers.filter((user) => user.id !== id));
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
