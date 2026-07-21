import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCompany } from "../services/api";

const useRegister = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const registerCompany = async (data) => {
    try {
      setLoading(true);

      const response = await createCompany(data);

      console.log("Registracija sėkminga:", response);

      alert("Registracija sėkminga. Dabar galite prisijungti prie sistemos.");

      navigate("/login");
    } catch (error) {
      console.error("Registracija nepavyko:", error);

      alert(error.response?.data?.message || "Registracija nepavyko");
    } finally {
      setLoading(false);
    }
  };

  return {
    registerCompany,
    loading,
  };
};

export default useRegister;
