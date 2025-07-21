import api from "../lib/axios"
import type { OpsFormData } from '../types/index'

export async function createOps(formdata: OpsFormData) {
    try {
        const { data } = await api.post('/ops/operacion', formdata)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}