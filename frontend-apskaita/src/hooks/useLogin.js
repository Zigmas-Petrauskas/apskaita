import { useState } from "react";
import api from "../services/api";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const loginUser = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("/auth/login", data);
      console.log("Login:", response.data);
    } catch (error) {
      console.error("Login klaida:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loginUser, loading };
};

export default useLogin;
