import { useNavigate } from 'react-router-dom' //Modificada
import { useForm } from 'react-hook-form'
import '../../styles/operaciones/formReg.css'
import OpsForm from '../../components/operaciones/OpsForm'
import type { OpsFormData } from '../../types/index'
import { createOps } from "../../api/operaciones/opsAPI"
import { toast } from 'react-toastify'
import { useMutation } from '@tanstack/react-query'
import { zodResolver } from '@hookform/resolvers/zod'
import { opsSchema } from '../../types/index'
//Alert Provider (sweetalert2)


export default function RegiOpsView() {

    const navigate = useNavigate() //Modificada

    const initialValues : OpsFormData = {
        id_usuario: 0,
        id_matricula: "",
        tipo_mov: "",
        iata_aeropuerto: "",
        fecha_real: "",
        fecha_iti: "",
        id_compania: "",
        tipo_estancia: "",
        vuelo: "",
        pista: "",
        id_calificador: "",
        posicion: "",
    }

    const { register, handleSubmit, reset, formState: {errors}, setValue } = useForm({
        defaultValues:initialValues,
        resolver: zodResolver(opsSchema),
    })

    // Modificaciones
    
    const {mutate} = useMutation ({
        mutationFn: createOps,
        onError: (error) => {
            toast.error(error.message)
        }, 
        onSuccess: (data) => {
            toast.success(data)
            reset()
            navigate('/operaciones/registrar') //Modificada
        }
    })

    const handleForm = (formData : OpsFormData) => mutate(formData)

    //*************************** */

    return (
    <>
        <h4 className="text-bold">Registro de Operaciones</h4>

        <form 
            onSubmit={handleSubmit(handleForm)}
            noValidate /*Desabilida la Validacion de HTML 5*/
        >
             
            <OpsForm 
                register={register}
                errors={errors}
                setValue={setValue}
            />
            

            <div className="form-actions">
                <button type="reset" className="btn">Limpiar</button>
                <button type="submit" className="btn btn-submit">Guardar Movimiento</button>
            </div>

        </form>
    </>
    )
}
