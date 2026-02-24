import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import CapForm from '../../components/operaciones/CapOpsForm'
import CapSOpsForm from '../../components/operaciones/CapSOpsForm'
import ErrorMessage from "../../components/ErrorMessage"
import { opsSchema, type OpsFormData } from '../../types'
import { createOps } from "../../api/OpsAPI"
import '../../styles/operaciones/formCapOps.css'
import axios from 'axios'

export default function CapOpsView() {
  const navigate = useNavigate()

  const [showForms, setShowForms] = useState(true)
  


  // MODAL

  const [showModal, setShowModal] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const [modalType, setModalType] = useState<'success' | 'error'>('success')
  const [formActivo, setFormActivo] = useState<'LL' | 'SA' | null>(null)


  // Valores iniciales

  const initialValues: OpsFormData = {
    id_usuario: 0,
    id_matricula: "",
    tipo_mov: "",
    iata_aeropuerto: "",
    fecha_iniOps: "",
    fecha_iti: "",
    id_compania: "",
    tipo_plataforma: "",
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

  // Formularios
 
  const formOps = useForm<OpsFormData>({
    defaultValues: initialValues,
    resolver: zodResolver(opsSchema),
  })

  const formSOps = useForm<OpsFormData>({
    defaultValues: initialValues,
    resolver: zodResolver(opsSchema),
  })
  

  // Mutación

  const { mutate } = useMutation({
    mutationFn: createOps,

    onError: (error: Error) => {
      // MENSAJE REAL DEL BACKEND
      setModalMessage(error.message)
      setModalType('error')
      setShowModal(true)
    },

    onSuccess: (data: string) => {
      // MENSAJE REAL DEL BACKEND
      setModalMessage(data)
      setModalType('success')
      setShowModal(true)

      if (formActivo === 'LL') {
        formOps.reset()
      }

      if (formActivo === 'SA') {
        formSOps.reset()
      }

      setFormActivo(null)
    }
  })

 


  // Submits

  
  //const handleFormOps = (data: OpsFormData) => mutate(data)
  //const handleFormSOps = (data: OpsFormData) => mutate(data)
  const handleFormOps = (data: OpsFormData) => {
    setFormActivo('LL')
    mutate(data)
  }

  const handleFormSOps = (data: OpsFormData) => {
    setFormActivo('SA')
    mutate(data)
  }

  const toDateTimeLocal = (date: string) => {
    const d = new Date(date)
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
    return d.toISOString().slice(0, 16)
  }


  // Consultar Matrícula

 /* const handleConsultar = async () => {
    const isValid = await formOps.trigger("id_matricula")
    if (!isValid) return

    const matricula = formOps.getValues("id_matricula")
    formSOps.setValue("id_matricula", matricula)

    setShowForms(true)
  }*/
   const handleConsultar = async () => {
    const isValid = await formOps.trigger("id_matricula")
     if (!isValid) return

    const matricula = formOps.getValues("id_matricula")
    formSOps.setValue("id_matricula", matricula)

    try {
      const response = await axios.post<{
        data: OpsFormData | []
      }>("http://localhost:3001/api/ops/operacion/ultimaLlegada", {
        id_matricula: matricula
      })

      const llegada = response.data.data

      if (!llegada || Array.isArray(llegada)) {
        setShowForms(true)
        return
      }

      const llegadaData = llegada as Partial<OpsFormData>
      ;(Object.keys(llegadaData) as Array<keyof OpsFormData>).forEach((key) => {
        if (
          key === "fecha_iniOps" || 
          key === "fecha_iti"
        ) {
          formOps.setValue(key, toDateTimeLocal(llegadaData [key] as string))
        } else {
          formOps.setValue(key, llegadaData[key]!)
        }
      })

      setShowForms(true)
     } catch (error){
      console.error("error al cargar la data", error)
      setShowForms(false)
     }
  } 



  // Render

  return (
    <div className="cap-ops-container">
      <h4 className="text-bold">Captura Comercial</h4>      
      <div className="matricula-container">
        <label>Matrícula</label>
        <input
          type="text"
          placeholder="Ej: XA-ABC"
          {...formOps.register("id_matricula", {
            onChange: (e) =>
              formOps.setValue("id_matricula", e.target.value.toUpperCase())
          })}
        />

        {formOps.formState.errors.id_matricula && (
          <ErrorMessage>
            {formOps.formState.errors.id_matricula.message}
          </ErrorMessage>
        )}

        <button
          type="button"
          className="btn-consultar"
          onClick={handleConsultar}
        >
          Consultar
        </button>
      </div>

      
      {showForms && (
        <div className="cap-forms-grid">
          <form onSubmit={formOps.handleSubmit(handleFormOps)} noValidate>
            <CapForm
              register={formOps.register}
              errors={formOps.formState.errors}
              setValue={formOps.setValue}
            />
          </form>

          <form onSubmit={formSOps.handleSubmit(handleFormSOps)} noValidate>
            <CapSOpsForm
              register={formSOps.register}
              errors={formSOps.formState.errors}
              setValue={formSOps.setValue}
            />
          </form>
        </div>
      )}

      
      {showModal && (
        <div className="modal-backdrop">
            <div className={`modal ${modalType}`}>

              {/* ICONO */}
              {modalType === "error" ? (
                <div className="error-icon">❌  </div>
              ) : (
                <div className="success-icon">
                  <svg viewBox="0 0 52 52">
                    <circle
                      className="success-circle"
                      cx="26"
                      cy="26"
                      r="25"
                    />
                    <path
                      className="success-check"
                      d="M14 27 L22 35 L38 18"
                    />
                  </svg>
                </div>
              )}

              
              <h3>{modalType === "error" ? "Error" : "Éxito"}</h3>
              <p>{modalMessage}</p>

              
              <button
                className="btn-guardar"
                onClick={() => {
                  setShowModal(false)
                  if (modalType === "success") {
                    navigate("/operaciones/capturaOps")
                  }
                }}
              >
                Aceptar
              </button>

            </div>
       </div>

      )}
    </div>
  )
}