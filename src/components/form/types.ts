import type { FieldValues, Path } from "react-hook-form";

export type FieldType =
  | "text"
  | "number"
  | "email"
  | "password"
  | "date"
  | "datetime-local"
  | "textarea"
  | "select"
  | "checkbox"
  | "radio"
  | "file";

export type Option = {
  value: string;
  label: string;
};

export type FieldConfig<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  type: FieldType;
  placeholder?: string;
  maxLength?: number;
  step?: number;
  required?: boolean;
  uppercase?: boolean;
  options?: Option[];
};

export type SectionConfig<T extends FieldValues> = {
  fields: FieldConfig<T>[];
};