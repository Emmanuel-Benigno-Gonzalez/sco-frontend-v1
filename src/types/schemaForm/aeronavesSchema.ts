import type { SectionConfig } from "../formTypes/types";
import type { AeronavesFormInput } from "../validationZod/aeronavesValidation";

export const aeronavesSchema: SectionConfig<AeronavesFormInput>[] = [
  {
    fields: [
      {
        name: "icao_aeronave",
        label: "ICAO Aeronave",
        type: "text",
        placeholder: "Ej: A320",
        maxLength: 4,
        uppercase: true,
        required: true,
      },
      {
        name: "iata_aeronave",
        label: "IATA Aeronave",
        type: "text",
        placeholder: "Ej: 320",
        maxLength: 3,
        uppercase: true,
      },
    ],
  },
  {
    fields: [
      {
        name: "max_pax",
        label: "Máximo Pasajeros",
        type: "number",
        placeholder: "Ej: 180",
      },
      {
        name: "no_motores",
        label: "Tipo de Motor",
        type: "text",
        maxLength: 50,
        uppercase: true,
        required: true,
      },
      {
        name: "mtow",
        label: "MTOW",
        type: "number",
        step: 1,
        placeholder: "Ej: 73500",
      },
      {
        name: "mzfw",
        label: "MZFW",
        type: "number",
        step: 1,
        placeholder: "Ej: 62500",
      },
    ],
  },
  {
    fields: [
      {
        name: "mldw",
        label: "MLDW",
        type: "number",
        step: 1,
        placeholder: "Ej: 66000",
      },
      {
        name: "ancho",
        label: "Ancho",
        type: "number",
        step: 0.1,
        placeholder: "Ej: 34.1",
      },
      {
        name: "altura",
        label: "Altura",
        type: "number",
        step: 0.1,
        placeholder: "Ej: 11.8",
      },
      {
        name: "largo",
        label: "Largo",
        type: "number",
        step: 0.1,
        placeholder: "Ej: 37.6",
      },
    ],
  },
  {
    fields: [
      {
        name: "descripcion",
        label: "Descripción",
        type: "textarea", 
        maxLength: 255,
        placeholder: "Ej: AIRBUS A320...",
        uppercase: true,
      },
    ],
  },
];