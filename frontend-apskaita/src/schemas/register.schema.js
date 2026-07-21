import { z } from "zod";

const registerSchema = z.object({
  // Company

  /*
    Įmonės duomenys

    Šie duomenys bus naudojami:
    - sąskaitoms
    - dokumentams
    - ataskaitoms
  */

  companyName: z.string().min(2, "Įveskite įmonės pavadinimą"),
  companyCode: z.string().min(5, "Įveskite juridinio asmens kodą"),
  vatCode: z.string().optional().or(z.literal("")),
  address: z.string().min(3, "Įveskite adresą"),
  companyPhone: z.string().optional(),
  companyEmail: z
    .string()
    .email("Neteisingas įmonės el. paštas")
    .optional()
    .or(z.literal("")),

  // Owner

  /*
    Pirmas sistemos vartotojas

    Visada kuriamas OWNER.
    Vėliau tik OWNER galės
    pridėti kitus vartotojus.
  */

  ownerFirstName: z.string().min(2, "Įveskite vardą"),
  ownerLastName: z.string().min(2, "Įveskite pavardę"),

  /*
    Prisijungimo vardas

    Naudojamas vietoje el. pašto
    prisijungimui prie sistemos.
  */

  ownerUsername: z
    .string()
    .min(3, "Vartotojo vardas turi būti bent iš 3 simbolių")
    .max(30, "Vartotojo vardas negali būti ilgesnis kaip 30 simbolių")
    .regex(
      /^[a-zA-Z0-9._-]+$/,
      "Vartotojo vardas gali turėti tik raides, skaičius, tašką, brūkšnelį ir apatinį brūkšnį",
    ),

  /*
    Kontaktiniai duomenys
  */
  ownerEmail: z.string().email("Neteisingas el. paštas"),
  ownerPhone: z.string().min(6, "Įveskite telefono numerį"),
  /*
    Slaptažodis

    Vėliau galima papildyti:
    - didžioji raidė
    - skaičius
    - simbolis
  */
  ownerPassword: z.string().min(8, "Slaptažodis turi būti bent 8 simbolių"),
});

export default registerSchema;
