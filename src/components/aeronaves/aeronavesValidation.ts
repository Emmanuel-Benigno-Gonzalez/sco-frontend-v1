import { z } from "zod";

const optionalNumber = () => 
  z.preprocess((val) => {
    if (val === "" || val === null || val === undefined || Number.isNaN(val)) {
      return undefined;
    }
    return Number(val);
  }, z.number().nonnegative("No puede ser menor a 0").optional());

export const aeronavesValidationSchema = z.object({
  icao_aeronave: z
    .string()
    .trim()
    .min(1, "El ICAO es obligatorio")
    .max(4, "Máximo 4 caracteres"),

  iata_aeronave: z
    .string()
    .trim()
    .max(3, "Máximo 3 caracteres")
    .optional(),

  max_pax: z
    .preprocess((val) => {
      if (val === "" || val === null || val === undefined || Number.isNaN(val)) {
        return undefined;
      }
      return Number(val);
    }, z.number().int("Debe ser un número entero").nonnegative("No puede ser menor a 0").optional()),

  no_motores: z
    .string()
    .trim()
    .min(1, "El tipo de motor es obligatorio")
    .max(50, "Máximo 50 caracteres"),

  mtow: optionalNumber(),
  mzfw: optionalNumber(),
  mldw: optionalNumber(),
  ancho: optionalNumber(),
  altura: optionalNumber(),
  largo: optionalNumber(),

  descripcion: z
    .string()
    .trim()
    .max(255, "Máximo 255 caracteres")
    .optional(),
});

export type AeronavesFormInput = z.input<typeof aeronavesValidationSchema>;
export type AeronavesFormData = z.output<typeof aeronavesValidationSchema>;