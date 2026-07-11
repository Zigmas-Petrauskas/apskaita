import { useState } from "react";

import { createCompany } from "../services/api";

const useRegister = () => {
  const [loading, setLoading] = useState(false);

  const registerCompany = async (data) => {
    try {
      setLoading(true);

      /*
        Ateityje čia:

        const response = await createCompany(data)


        Backend grąžins:

        {
          companyId,
          userId,
          role:"OWNER",
          twoFactorRequired:true
        }


        Jeigu:

        twoFactorRequired === true

        nukreipsime į:

        /verify-two-factor
      */

      const response = await createCompany(data);

      console.log(response);
    } catch (error) {
      console.error("Registration error:", error);
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
