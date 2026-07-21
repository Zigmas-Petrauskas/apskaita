import { z } from "zod";

const loginSchema = z.object({
  username: z.string().min(3, "Įveskite vartotojo vardą"),
  password: z.string().min(8, "Slaptažodis turi būti bent 8 simbolių"),
});

export default loginSchema;
