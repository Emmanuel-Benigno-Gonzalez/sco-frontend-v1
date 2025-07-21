import { useForm } from 'react-hook-form'
import '../../styles/operaciones/formReg.css'
import OpsForm from '../../components/operaciones/OpsForm'
import type { OpsFormData } from '../../types/index'
import { createOps } from "../../api/OpsAPI"


export default function RegiOpsView() {

    const initialValues : OpsFormData = {
        id_usuario: 0,
        id_matricula: "",
        tipo_mov: "",
        iata_aeropuerto: "",
        fecha_iniOps: "",
        hora_iti: "",
        hora_real: "",
        id_compania: "",
        vuelo: "",
        pista: "",
        id_calificador: "",
        posicion: "",
        puerta: 0,
        banda: 0,
        adulto_nac: 0,
        infante_nac: 0,
        transito_nac: 0,
        conexion_nac: 0,
        excento_nac: 0,
        adulto_int: 0,
        infante_int: 0,
        transito_int: 0,
        conexion_int: 0,
        excento_int: 0,
        pza_equipaje: 0,
        kgs_equipaje: 0,
        kgs_carga: 0,
        correo: "",
        observaciones: ""
    }


    const { register, handleSubmit, formState: {errors}, setValue } = useForm({
        defaultValues:initialValues
    })

    const handleForm = (data : OpsFormData) => {
        createOps(data)
    }

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
