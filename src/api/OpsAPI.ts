import { isAxiosError } from "axios"
import api from "../lib/axios"
import { consultaOps, type OpsFormData } from '../types/index'

export async function createOps(formdata: OpsFormData) {
    try {
        const { data } = await api.post('/ops/operacion', formdata)
        return data.message
    } catch (error) {
        if(isAxiosError(error)  && error.response) {
            throw new Error(error.response.data.message)
        }
    }
}


export async function getOps() {
    try {
        const { data } = await api('/ops/operacion')
        const response = consultaOps.safeParse(data)
        console.log(response)
        if(response.success) {
            return response.data
        }
    } catch (error) {
        if(isAxiosError(error)  && error.response) {
            throw new Error(error.response.data.message)
        }
    }
}