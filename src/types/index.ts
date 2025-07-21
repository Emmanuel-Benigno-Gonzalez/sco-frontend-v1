import { z } from 'zod'

/** Operaciones */

const mov = ["S", "L"] as const;
const calf = ["RP", "FP"] as const;

export type Mov = (typeof mov)[number];
export type Calf = (typeof calf)[number];

export const mappedMovimiento: {[key in Mov]: string} = {
  S: "Salida",
  L: "Llegada"
}

export const mappedCalificador: {[key in Calf]: string} = {
  RP: "Regular de Pasajeros",
  FP: "Fletamento de Pasajeros"
}

export const opsSchema = z.object({
  id_usuario: z.number(),
  id_matricula: z.string()
    .min(1, { message: "La matrícula es requerida" })
    .transform((val) => val.toUpperCase()),
  tipo_mov: z.string()
    .min(1, { message: "El tipo de movimiento es requerido" }),
  fecha_iniOps: z.string()
    .min(8, { message: "El campo fecha es requerido" })
    .transform((val) => {
      if (val.includes('T')) {
        return val.split('T')[0];
      }
      return val;
    })
    .refine((val) => /^\d{4}-\d{2}-\d{2}$/.test(val), {
      message: "Formato de fecha inválido. Usa AAAA-MM-DD",
    }),
  iata_aeropuerto: z.string()
  .length(3, { message: "El campo debe tener exactamente 3 caracteres" }),
  hora_iti: z.string()
    .min(6, { message: "El campo es requerido" })
    .regex(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, "Formato de hora inválido"),
  hora_real: z.string()
    .min(6, { message: "El campo es requerido" })
    .regex(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, "Formato de hora inválido"),
/*  hora_calzos: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, "Formato de hora inválido"),
  hora_finOps: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, "Formato de hora inválido"),*/
  id_compania: z.string()
    .min(1, { message: "El FBO/Aerolinea es requerido" }),
  vuelo: z.string()
    .min(1, { message: "El número de vuelo es requerido" }),
  pista: z.string()
    .min(1, { message: "La pista es requerida" }),
  id_calificador: z.string()
    .min(1, { message: "El campo  es requerido" }),
  posicion: z.string(),
  puerta: z.number(),
  banda: z.number(),
  adulto_nac: z.number(),
  infante_nac: z.number(),
  transito_nac: z.number(),
  conexion_nac: z.number(),
  excento_nac: z.number(),
  adulto_int: z.number(),
  infante_int: z.number(),
  transito_int: z.number(),
  conexion_int: z.number(),
  excento_int: z.number(),
  pza_equipaje: z.number(),
  kgs_equipaje: z.number(),
  kgs_carga: z.number(),
  correo: z.string(),
  observaciones: z.string()
})

type Ops = z.infer< typeof opsSchema >
export type OpsFormData = Pick<Ops, 
        'id_usuario' | 'id_matricula' | 'tipo_mov' | 'fecha_iniOps' | 
        'iata_aeropuerto' |'hora_iti' | 'hora_real' |
        'id_compania' | 'vuelo' | 'pista' | 'id_calificador' |
        'posicion' | 'puerta' | 'banda' | 'adulto_nac' |
        'infante_nac' | 'transito_nac' | 'conexion_nac' |
        'excento_nac' | 'adulto_int' | 'infante_int' |
        'transito_int' | 'conexion_int' | 'excento_int' |
        'pza_equipaje' | 'kgs_equipaje' | 'kgs_carga' |
        'correo' | 'observaciones'
        >