import type { UseFormRegister, FieldErrors, UseFormSetValue } from 'react-hook-form'
import ErrorMessage from "../ErrorMessage";
import type { OpsFormData }  from "../../types"


type OpsFormProps = {
    register: UseFormRegister<OpsFormData>
    errors: FieldErrors<OpsFormData>
    setValue: UseFormSetValue<OpsFormData>
}


export default function OpsForm({ register, errors, setValue } : OpsFormProps) {

  return (
    <>
        <div className='form-contenedor'>
            <div className='section-2col'>
                <div className='columna'>
                    <h2 className="section-title">Información Básica del Vuelo</h2> 
                    <div className='info-basica'>
                        <div className="form-group">
                            <label htmlFor="id_matricula" className="required" >Matrícula</label>
                            <input 
                                type="text" 
                                id="id_matricula" 
                                placeholder="Ej: XAVBU" 
                                {...register("id_matricula", {
                                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                                        const upper = e.target.value.toUpperCase();
                                        setValue("id_matricula", upper);
                                    },
                                })}
                                />
                            {errors.id_matricula && (
                                <ErrorMessage>{errors.id_matricula.message}</ErrorMessage>
                            )}
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="tipo_mov" className="required">Tipo de Movimiento</label>
                            <select id="tipo_mov"
                                {...register("tipo_mov")}
                            >
                                <option value="">Seleccione...</option>
                                <option value="S">Salida (S)</option>
                                <option value="LL">Llegada (L)</option>
                            </select>
                            {errors.tipo_mov && (
                                <ErrorMessage>{errors.tipo_mov.message}</ErrorMessage>
                            )}
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="iata_aeropuerto" className="required">Aeropuerto IATA</label>
                            <input 
                                type="text" 
                                id="iata_aeropuerto" 
                                placeholder="Ej: TLC" 
                                {...register("iata_aeropuerto", {
                                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                                        const upper = e.target.value.toUpperCase();
                                        setValue("iata_aeropuerto", upper);
                                    },
                                })}
                            />
                            {errors.iata_aeropuerto && (
                                <ErrorMessage>{errors.iata_aeropuerto.message}</ErrorMessage>
                            )}
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="id_compania" className="required">Compañía</label>
                            <input 
                                type="text" 
                                id="id_compania" 
                                placeholder="Ej: VIV" 
                                {...register("id_compania", {
                                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                                        const upper = e.target.value.toUpperCase();
                                        setValue("id_compania", upper);
                                    },
                                })}
                            />
                            {errors.id_compania && (
                                <ErrorMessage>{errors.id_compania.message}</ErrorMessage>
                            )}
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="vuelo" className="required">Número de Vuelo</label>
                            <input 
                                type="text" 
                                id="vuelo" 
                                placeholder="Ej: VIV3480" 
                                {...register("vuelo", {
                                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                                        const upper = e.target.value.toUpperCase();
                                        setValue("vuelo", upper);
                                    },
                                })}
                            />
                            {errors.vuelo && (
                                <ErrorMessage>{errors.vuelo.message}</ErrorMessage>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="id_calificador">Calificador</label>
                            <select id="id_calificador"
                                {...register("id_calificador")}
                            >
                                <option value="">Seleccione...</option>
                                <option value="RP">Comercial Regular de Pasajeros</option>
                                <option value="FP">Comercial Fletamento de Pasajeros</option>
                            </select>
                            {errors.id_calificador && (
                                <ErrorMessage>{errors.id_calificador.message}</ErrorMessage>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="tipo_estancia">Tipo de Estancia</label>
                            <select id="tipo_estancia"
                                {...register("tipo_estancia")}
                            >
                                <option value="">Seleccione...</option>
                                <option value="RN">Pernocta</option>
                                <option value="TA">Tour Around</option>
                                <option value="HH">Hangar</option>
                            </select>
                            {errors.tipo_estancia && (
                                <ErrorMessage>{errors.tipo_estancia.message}</ErrorMessage>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="pista">Pista</label>
                            <input 
                                type="text" 
                                id="pista" 
                                placeholder="Ej: 2"
                                {...register("pista")}
                            />
                            {errors.pista && (
                                <ErrorMessage>{errors.pista.message}</ErrorMessage>
                            )}
                        </div>

                    </div>
                </div>

                <div className='columna'>
                    <h2 className="section-title">Horarios y Fechas</h2>
                    <div className='info-basica'>
                        <div className="form-group">
                            <label htmlFor="fecha_real" className="required">Fecha Real</label>
                            <input 
                                type="datetime-local" 
                                id="fecha_real" 
                                {...register("fecha_real")}    
                            />
                            {errors.fecha_real && (
                                <ErrorMessage>{errors.fecha_real.message}</ErrorMessage>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="fecha_iti" className="required">Fecha Itinerario</label>
                            <input 
                                type="datetime-local" 
                                id="fecha_iti" 
                                {...register("fecha_iti")}    
                            />
                            {errors.fecha_iti && (
                                <ErrorMessage>{errors.fecha_iti.message}</ErrorMessage>
                            )}
                        </div>
                    </div>

                    <h2 className="section-title">Posición y Puerta</h2>
                    <div className='info-basica'>
                        <div className="form-group">
                            <label htmlFor="posicion">Posición</label>
                            <input 
                                type="text" 
                                id="posicion" 
                                {...register("posicion", {
                                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                                        const upper = e.target.value.toUpperCase();
                                        setValue("posicion", upper);
                                    },
                                })}
                            />
                            {errors.posicion && (
                                <ErrorMessage>{errors.posicion.message}</ErrorMessage>
                            )}
                        </div>
                    </div>    
                </div> 
            </div>
            
        </div>

    </>
  )
}
