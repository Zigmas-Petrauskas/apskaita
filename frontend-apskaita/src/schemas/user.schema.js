import { z } from "zod";

const userSchema = z.object({
  firstName: z.string().trim().min(2, "Įveskite vardą"),
  lastName: z.string().trim().min(2, "Įveskite pavardę"),
  username: z.string().trim().min(3, "Per trumpas vartotojo vardas"),
  email: z.string().trim().email("Blogas el. paštas"),
  password: z.string().min(8, "Minimaliai 8 simboliai"),
});

export default userSchema;
