import { useState } from "react";
import { createCompany } from "../services/api";

const useRegister = () => {
  const [loading, setLoading] = useState(false);

  const registerCompany = async (data) => {
    try {
      setLoading(true);

      /*
      Čia vyksta:

      React
        ↓
      axios
        ↓
      Express API


      Ateityje atsakymas bus:

      {
        companyId,
        userId,
        role:"OWNER",
        twoFactorRequired:true
      }

    */

      const response = await createCompany(data);

      console.log("Registracija sėkminga", response);
    } catch (error) {
      console.error("Registracija nepavyko:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    registerCompany, loading
  };
};

export default useRegister;
