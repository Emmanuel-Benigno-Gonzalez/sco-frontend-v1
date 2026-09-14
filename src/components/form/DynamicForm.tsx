import { useForm, get, type FieldValues, type SubmitHandler, type UseFormProps } from "react-hook-form";
import FormField from "./FormField";
import type { SectionConfig } from "./types";

type DynamicFormProps<
  TInput extends FieldValues,
  TOutput extends FieldValues = TInput
> = {
  sections: SectionConfig<TInput>[];
  submitText?: string;
  resetText?: string;
  isSubmitting?: boolean;
  resolver?: UseFormProps<TInput, unknown, TOutput>["resolver"];
  onSubmit: SubmitHandler<TOutput>;
};

export default function DynamicForm<
  TInput extends FieldValues,
  TOutput extends FieldValues = TInput
>({
  sections,
  submitText = "Guardar",
  resetText = "Limpiar",
  isSubmitting = false,
  resolver,
  onSubmit,
}: DynamicFormProps<TInput, TOutput>) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TInput, unknown, TOutput>({
    resolver,
    mode: "onSubmit",
  });

  return (
    <form
      className="form-registro"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      {sections.map((section, sectionIndex) => (
      <div key={sectionIndex}>
      <div className="form-row">
      {section.fields.map((field) => {
        const fieldError = get(errors, field.name as string);

        return (
          <FormField
            key={field.name as string}
            field={field}
            register={register}
            error={fieldError?.message}
          />
        );
      })}
    </div>
  </div>
))}

      <div className="form-actions">
        <button
          type="button"
          className="btn-secundario"
          disabled={isSubmitting}
          onClick={() => reset()}
        >
          {resetText}
        </button>

        <button
          type="submit"
          className="btn-primario"
          disabled={isSubmitting}
        >
          {submitText}
        </button>
      </div>
    </form>
  );
}