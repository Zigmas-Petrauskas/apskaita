import { z } from "zod";

const userSchema = z.object({
  firstName: z.string().min(2, "Įveskite vardą"),

  lastName: z.string().min(2, "Įveskite pavardę"),

  username: z.string().min(3, "Per trumpas vartotojo vardas"),

  email: z.string().email("Blogas el.paštas"),

  password: z.string().min(8, "Minimaliai 8 simboliai"),
});

export default userSchema;
