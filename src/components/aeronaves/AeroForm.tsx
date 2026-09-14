import "../../styles/aeronaves/formReg.css";
import { zodResolver } from "@hookform/resolvers/zod";
import DynamicForm from "../form/DynamicForm";
import { useCreateAeronave } from "../../hooks/aeronaves/useCreateAeronave";
import { aeronavesSchema } from "./aeronavesSchema";
import { aeronavesValidationSchema, type AeronavesFormData, type AeronavesFormInput,} from "./aeronavesValidation";

export default function AeroForm() {
  const createAeronaveMutation = useCreateAeronave();

  const handleCreateAeronave = (data: AeronavesFormData): void => {
    createAeronaveMutation.mutate(data);
  };

  const isPending = createAeronaveMutation.isPending;

  return (
    <>
      <DynamicForm<AeronavesFormInput, AeronavesFormData>
        sections={aeronavesSchema}
        resolver={zodResolver(aeronavesValidationSchema)}
        submitText={isPending ? "Guardando..." : "Guardar"}
        resetText="Limpiar"
        isSubmitting={isPending}
        onSubmit={handleCreateAeronave}
      />

      {createAeronaveMutation.isSuccess && (
        <div className="alert alert-success">
          <p>{createAeronaveMutation.data.message}</p>
        </div>
      )}

      {createAeronaveMutation.isError && (
        <div className="alert alert-error">
          <p>No fue posible registrar la aeronave.</p>
        </div>  
      )}
    </>
  );
}