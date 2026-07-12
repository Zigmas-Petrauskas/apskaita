import axios from "axios";

/*
  Pagrindinis axios klientas.

  Development:

  React:
  localhost:5173

  Backend:
  localhost:5000


  API struktūra:

  /api/v1

  Pvz:

  POST
  /api/v1/company/register

*/

const api = axios.create({

  baseURL: "http://127.0.0.1:5000/api/v1",

  headers: {
    "Content-Type": "application/json",
  },
});

/*
  Įmonės registracija.

  Frontend forma turi laukus:

  companyName
  companyCode
  vatCode
  address
  companyPhone
  companyEmail

  ownerFirstName
  ownerLastName
  ownerEmail
  ownerPassword


  Backend gauna:

  {
    company:{},
    owner:{}
  }

*/

export const createCompany = async (data) => {

  const payload = {
    company: { name: data.companyName, code: data.companyCode, vatCode: data.vatCode, address: data.address, phone: data.companyPhone, email: data.companyEmail },
    owner: { firstName: data.ownerFirstName, lastName: data.ownerLastName, email: data.ownerEmail, password: data.ownerPassword },
  };

  const response = await api.post(
    "/company/register", payload
  );

  return response.data;
};

export default api;
