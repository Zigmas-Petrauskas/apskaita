import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const loginUser = async (data) => {
    try {
      setLoading(true);

      const response = await api.post("/auth/login", data);

      console.log("Login:", response.data);

      /*
        Saugome prisijungusį vartotoją

        Vėliau čia bus:
        - JWT token
        - refresh token
      */

      localStorage.setItem("user", JSON.stringify(response.data));

      // einame į dashboard

      navigate("/dashboard");
    } catch (error) {
      console.error("Login klaida:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    loginUser,
    loading,
  };
};

export default useLogin;
