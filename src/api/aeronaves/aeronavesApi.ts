import { isAxiosError } from "axios";
import api from "../../lib/axios";
import type { AeronavesFormData } from "../../components/aeronaves/aeronavesValidation"

export type CreateAeronaveResponse = {
  message: string;
  data?: {
    id?: number | string;
  };
};

export async function createAeronave(
  formData: AeronavesFormData,
): Promise<CreateAeronaveResponse> {
  try {
    const { data } = await api.post<CreateAeronaveResponse>(
      "https://sco-server.onrender.com/api/ops/aeronave",
      formData,
    );
    console.log(data)
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message);
    }
    throw new Error("No fue posible registrar la aeronave.");
  }
}