import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Neteisingas el. pasštas"),
  password: z.string().min(8, "Slaptažodis turi būti bent 8 simbolių"),
});

export default loginSchema;
