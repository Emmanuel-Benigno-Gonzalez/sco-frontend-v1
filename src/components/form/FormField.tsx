import type { ChangeEvent } from "react";
import type { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";
import ValidationMessage from "./ValidationMessage";
import type { FieldConfig } from "./types";

type FormFieldProps<T extends FieldValues> = {
  field: FieldConfig<T>;
  register: UseFormRegister<T>;
  error?: string;
};

export default function FormField<T extends FieldValues>({
  field,
  register,
  error,
}: FormFieldProps<T>) {
  const errorId = `${field.name as string}-error`;

  const registerOptions: RegisterOptions<T> = {
    required: field.required,

    setValueAs:
      field.type === "number"
        ? (value: string) => (value === "" ? undefined : Number(value))
        : undefined,

    onChange: field.uppercase
      ? (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          const { value, selectionStart, selectionEnd } = event.target;
          const upperValue = value.toUpperCase();
          
          event.target.value = upperValue;
          if (selectionStart !== null && selectionEnd !== null) {
            event.target.setSelectionRange(selectionStart, selectionEnd);
          }
        }
      : undefined,
  };

  const accessibilityProps = {
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? errorId : undefined,
  };

  const inputClassName = field.uppercase ? "form-input-uppercase" : "";

  return (
    <div className="form-group">
      <label htmlFor={field.name as string}>{field.label}</label>

      {field.type === "textarea" ? (
        <textarea
          id={field.name as string}
          className={inputClassName}
          placeholder={field.placeholder}
          maxLength={field.maxLength}
          {...accessibilityProps}
          {...register(field.name, registerOptions)}
        />
      ) : field.type === "select" ? (
        <select
          id={field.name as string}
          {...accessibilityProps}
          {...register(field.name, registerOptions)}
        >
          <option value="">Seleccione una opción</option>
          {field.options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={field.name as string}
          type={field.type}
          className={inputClassName}
          placeholder={field.placeholder}
          maxLength={field.maxLength}
          step={field.step}
          {...accessibilityProps}
          {...register(field.name, registerOptions)}
        />
      )}

      <ValidationMessage id={errorId} message={error} />
    </div>
  );
}