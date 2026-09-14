import { useMutation } from "@tanstack/react-query"
import { createAeronave } from "../../api/aeronaves/aeronavesApi"

export function useCreateAeronave() {
  return useMutation({
    mutationFn: createAeronave,
  })
}