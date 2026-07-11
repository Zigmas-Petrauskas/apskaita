import axios from "axios";

const api = axios.create({
  /*
    Ateityje čia bus backend adresas.

    Development:
    http://localhost:5000/api

    Production:
    https://api.lengvaskodas.lt/api
  */

  baseURL: "http://localhost:5000/api",

  headers: {
    "Content-Type": "application/json",
  },
});

export const createCompany = async (data) => {
  /*
    Backend endpoint:

    POST /api/company/register


    Siunčiama struktūra:

    {
      company:{
        name:"",
        code:""
      },

      owner:{
        email:"",
        password:""
      }
    }

  */

  const response = await api.post(
    "/company/register",

    data,
  );

  return response.data;
};

export default api;
