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

export const verificarNumerosEnteros = () => {
  return z
    .number({ error: "El campo debe ser un número" })
    .min(0, { message: "Debe ser igual o mayor a 0" })
    .int({ message: "El número debe ser entero" })
    .optional();
};

export const verificarNumerosReales = () => {
  return z
    .number({ error: "El campo debe ser un número" })
    .min(0, { message: "Debe ser igual o mayor a 0" })
    .optional();
};

export const opsSchema = z.object({
  id_usuario: z.number(),
  id_matricula: z.string()
    .min(1, { message: "La matrícula es requerida" })
    .transform((val) => val.toUpperCase()),
  tipo_mov: z.string()
    .min(1, { message: "El tipo de movimiento es requerido" }),
  /*fecha_iniOps: z.string()
    .min(8, { message: "El campo fecha es requerido" })
    .transform((val) => {
      if (val.includes('T')) {
        return val.split('T')[0];
      }
      return val;
    })
    .refine((val) => /^\d{4}-\d{2}-\d{2}$/.test(val), {
      message: "Formato de fecha inválido. Usa AAAA-MM-DD",
    }),*/
  fecha_iniOps: z
    .string()
    .regex(
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/,
      "Fecha y hora inválidas"
    )
    .transform((value) => {
      const date = new Date(value);
      return date.toISOString(); // YYYY-MM-DDTHH:mm:ss.sssZ
    }),
  fecha_iti: z
    .string()
    .regex(
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/,
      "Fecha y hora inválidas"
    )
    .transform((value) => {
      const date = new Date(value);
      return date.toISOString(); // YYYY-MM-DDTHH:mm:ss.sssZ
    }),
  iata_aeropuerto: z.string()
  .length(3, { message: "El campo debe tener exactamente 3 caracteres" }),
  /*hora_iti: z.string()
    .min(6, { message: "El campo es requerido" })
    .regex(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, "Formato de hora inválido"),
  hora_real: z.string()
    .min(6, { message: "El campo es requerido" })
    .regex(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, "Formato de hora inválido"),
/*  hora_calzos: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, "Formato de hora inválido"),
  hora_finOps: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, "Formato de hora inválido"),*/
  id_compania: z.string()
    .min(1, { message: "El FBO/Aerolinea es requerido" }),
  tipo_plataforma: z.string()
    .min(1, { message: "El tipo de movimiento es requerido" }),
  vuelo: z.string()
    .min(1, { message: "El número de vuelo es requerido" }),
  pista: z.string()
    .min(1, { message: "La pista es requerida" }),
  id_calificador: z.string()
    .min(1, { message: "El campo  es requerido" }),
  posicion: z.string(),
  puerta: verificarNumerosEnteros(),
  banda: verificarNumerosEnteros(),
  adulto_nac: verificarNumerosEnteros(),
  infante_nac: verificarNumerosEnteros(),
  transito_nac: verificarNumerosEnteros(),
  conexion_nac: verificarNumerosEnteros(),
  excento_nac: verificarNumerosEnteros(),
  adulto_int: verificarNumerosEnteros(),
  infante_int: verificarNumerosEnteros(),
  transito_int: verificarNumerosEnteros(),
  conexion_int: verificarNumerosEnteros(),
  excento_int: verificarNumerosEnteros(),
  pza_equipaje: verificarNumerosEnteros(),
  kgs_equipaje: verificarNumerosReales(),
  kgs_carga: verificarNumerosReales(),
  correo: z.string(),
  observaciones: z.string()
})

export const consultaOps = z.array(
  opsSchema.pick({
    id_usuario: true,
    id_matricula: true,
    tipo_mov: true,
    fecha_iniOps: true,
    iata_aeropuerto: true,
    fecha_iti: true,
    id_compania: true,
    tipo_plataforma: true,
    vuelo: true,
    pista: true,
    id_calificador: true,
    posicion: true,
    puerta: true,
    banda: true,
    adulto_nac: true,
    infante_nac: true,
    transito_nac: true,
    conexion_nac: true,
    excento_nac: true,
    adulto_int: true,
    infante_int: true,
    transito_int: true,
    conexion_int: true,
    excento_int: true,
    pza_equipaje: true,
    kgs_equipaje: true,
    kgs_carga: true,
    correo: true,
    observaciones: true
  }).extend({
      id_ops: z.string(),
      total_nac: z.number(),
      total_int: z.number(),
      total_pax: z.number(),
      origen: z.string(),
      destino: z.string(),
      fecha_finOps: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/,
          "Fecha y hora inválidas"
        )
        .transform((value) => {
          const date = new Date(value);
          return date.toISOString(); // YYYY-MM-DDTHH:mm:ss.sssZ
        }),
      token_finOps: z.number(),
      })
)

type Ops = z.infer< typeof opsSchema >
export type OpsFormData = Pick<Ops, 
        'id_usuario' | 'id_matricula' | 'tipo_mov' | 'fecha_iniOps' | 
        'fecha_iti' | 'iata_aeropuerto' |
        'id_compania' | 'tipo_plataforma' | 'vuelo' | 'pista' | 'id_calificador' |
        'posicion' | 'puerta' | 'banda' | 'adulto_nac' |
        'infante_nac' | 'transito_nac' | 'conexion_nac' |
        'excento_nac' | 'adulto_int' | 'infante_int' |
        'transito_int' | 'conexion_int' | 'excento_int' |
        'pza_equipaje' | 'kgs_equipaje' | 'kgs_carga' |
        'correo' | 'observaciones'
        >