import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import CapForm from '../../components/operaciones/CapOpsForm'
import CapSOpsForm from '../../components/operaciones/CapSOpsForm'
import ErrorMessage from "../../components/ErrorMessage"

import { opsSchema, type OpsFormData } from '../../types'
import { createOps } from "../../api/OpsAPI"

import '../../styles/operaciones/formCapOps.css'

export default function CapOpsView() {

  const navigate = useNavigate()
  const [showForms, setShowForms] = useState(false)

  // =============================
  // Valores iniciales
  // =============================
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

  // =============================
  // Formulario Comercial
  // =============================
  const formOps = useForm<OpsFormData>({
    defaultValues: initialValues,
    resolver: zodResolver(opsSchema),
  })

  // =============================
  // Formulario Servicios Ops
  // =============================
  const formSOps = useForm<OpsFormData>({
    defaultValues: initialValues,
    resolver: zodResolver(opsSchema),
  })

  // =============================
  // Mutación
  // =============================
  /*const { mutate } = useMutation({
    mutationFn: createOps,
    onError: (error: any) => {
      toast.error(error.message)
    },
    onSuccess: (data) => {
      toast.success(data)
      formOps.reset()
      formSOps.reset()
      navigate('/operaciones/registrar')
    }
  })*/

  const {mutate} = useMutation ({
        mutationFn: createOps,
        onError: (error) => {
            toast.error(error.message)
        }, 
        onSuccess: (data) => {
            toast.success(data)
            formOps.reset()
            formSOps.reset()
            navigate('/operaciones/capturaOps') //Modificada
        }
    })


  // =============================
  // Submits
  // =============================
  const handleFormOps = (data: OpsFormData) => mutate(data)
  const handleFormSOps = (data: OpsFormData) => mutate(data)

  // =============================
  // Consultar Matrícula
  // =============================
  const handleConsultar = async () => {
    const isValid = await formOps.trigger("id_matricula")
    if (!isValid) return

    const matricula = formOps.getValues("id_matricula")

    // Sincroniza matrícula en ambos formularios
    formSOps.setValue("id_matricula", matricula)

    setShowForms(true)
  }

  // =============================
  // Render
  // =============================
  return (
    <div className="cap-ops-container">
      <h4 className="text-bold">Captura Comercial</h4>

      {/* MATRÍCULA */}
      <div className="matricula-container">
        <label>Matrícula</label>
        <input
          type="text"
          placeholder="Ej: XA-ABC"
          {...formOps.register("id_matricula", {
            onChange: (e) => {
              formOps.setValue("id_matricula", e.target.value.toUpperCase())
            }
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

      {/* FORMULARIOS */}
      {showForms && (
        <div className="cap-forms-grid">

          {/* FORM COMERCIAL */}
          <form onSubmit={formOps.handleSubmit(handleFormOps)} noValidate>
            <CapForm
              register={formOps.register}
              errors={formOps.formState.errors}
              setValue={formOps.setValue}
            />
          </form>

          {/* FORM SERVICIOS OPS */}
          <form onSubmit={formSOps.handleSubmit(handleFormSOps)} noValidate>
            <CapSOpsForm
              register={formSOps.register}
              errors={formSOps.formState.errors}
              setValue={formSOps.setValue}
            />
          </form>

        </div>
      )}
    </div>
  )
}