import { z } from "zod";

const registerSchema = z.object({
  // Company

  companyName: z.string().min(2, "Įveskite įmonės pavadinimą"),

  companyCode: z.string().min(5, "Įveskite juridinio asmens kodą"),

  vatCode: z.string().optional().or(z.literal("")),

  address: z.string().min(3, "Įveskite adresą"),

  companyPhone: z.string().optional(),

  companyEmail: z.string().email("Neteisingas įmonės el. paštas").optional(),

  // Owner

  ownerFirstName: z.string().min(2, "Įveskite vardą"),

  ownerLastName: z.string().min(2, "Įveskite pavardę"),

  ownerEmail: z.string().email("Neteisingas el. paštas"),

  ownerPassword: z.string().min(8, "Slaptažodis turi būti bent 8 simbolių"),
});

export default registerSchema;
