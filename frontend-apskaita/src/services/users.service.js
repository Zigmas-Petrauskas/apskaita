import api from "./api";

// Gauti vartotojus
export const fetchUsers = async () => {
  const response = await api.get("/users");
  return response.data.data;
};

// Sukurti vartotoją
export const createUser = async (user) => {
  const response = await api.post("/users", user);
  return response.data.data;
};

// Atnaujinti vartotoją
export const updateUser = async (id, user) => {
  const response = await api.put(`/users/${id}`, user);
  return response.data.data;
};

// Ištrinti vartotoją
export const deleteUser = async (id) => {
  await api.delete(`/users/${id}`);
  return id;
};
