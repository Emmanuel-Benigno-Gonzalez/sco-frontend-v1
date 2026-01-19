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
                            <label htmlFor="tipo_plataforma">Tipo de Plataforma</label>
                            <select id="tipo_plataforma"
                                {...register("tipo_plataforma")}
                            >
                                <option value="">Seleccione...</option>
                                <option value="RN">Plataforma Remota Norte</option>
                                <option value="TA">Plataforma Esteril</option>
                            </select>
                            {errors.tipo_plataforma && (
                                <ErrorMessage>{errors.tipo_plataforma.message}</ErrorMessage>
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
                            <label htmlFor="fecha_iniOps" className="required">Fecha Real</label>
                            <input 
                                type="datetime-local" 
                                id="fecha_iniOps" 
                                {...register("fecha_iniOps")}    
                            />
                            {errors.fecha_iniOps && (
                                <ErrorMessage>{errors.fecha_iniOps.message}</ErrorMessage>
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
                        
                        <div className="form-group">
                            <label id="puerta">Puerta</label>
                            <input 
                                type="number" 
                                id="puerta"  
                                min="0"
                                {...register("puerta", { valueAsNumber: true })}   
                            />
                            {errors.puerta && (
                                <ErrorMessage>{errors.puerta.message}</ErrorMessage>
                            )}
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="banda">Banda</label>
                            <input 
                                type="number" 
                                id="banda"  
                                min="0"
                                {...register("banda", { valueAsNumber: true })}      
                            />
                            {errors.banda && (
                                <ErrorMessage>{errors.banda.message}</ErrorMessage>
                            )}
                        </div>
                    </div>    
                </div> 
            </div>
            
        </div>

        <div className='form-contenedor'>
            <h2 className="section-title">Pasajeros y Cargas</h2>
            <div className='section-2col'>
                <div className='columna'>
                    <h3 className="section-title">Nacionales</h3>

                    <div className='info-pax'>
                        <div className="form-group">
                            <label htmlFor="adulto_nac">Adultos</label>
                            <input 
                                type="number" 
                                id="adulto_nac" 
                                className="small-input"
                                {...register("adulto_nac", { valueAsNumber: true })}    
                            />
                            {errors.adulto_nac && (
                                <ErrorMessage>{errors.adulto_nac.message}</ErrorMessage>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="infante_nac">Infantes</label>
                            <input 
                                type="number" 
                                id="infante_nac" 
                                min="0" 
                                className="small-input"
                                {...register("infante_nac", { valueAsNumber: true })}      
                            />
                            {errors.infante_nac && (
                                <ErrorMessage>{errors.infante_nac.message}</ErrorMessage>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="transito_nac">Tránsito</label>
                            <input 
                                type="number" 
                                id="transito_nac"  
                                min="0" 
                                className="small-input"
                                {...register("transito_nac", { valueAsNumber: true })}      
                            />
                            {errors.transito_nac && (
                                <ErrorMessage>{errors.transito_nac.message}</ErrorMessage>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="conexion_nac">Conexión</label>
                            <input 
                                type="number" 
                                id="conexion_nac" 
                                min="0" 
                                className="small-input"
                                {...register("conexion_nac", { valueAsNumber: true })}      
                            />
                            {errors.conexion_nac && (
                                <ErrorMessage>{errors.conexion_nac.message}</ErrorMessage>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="excento_nac">Exentos</label>
                            <input 
                                type="number" 
                                id="excento_nac"  
                                min="0" 
                                className="small-input"
                                {...register("excento_nac", { valueAsNumber: true })}      
                            />
                            {errors.excento_nac && (
                                <ErrorMessage>{errors.excento_nac.message}</ErrorMessage>
                            )}
                        </div>
                    </div>
                </div>

                <div className='columna'>
                    <h3 className="section-title">Internacionales</h3>
                    <div className='info-pax'>
                        <div className="form-group">
                            <label htmlFor="adulto_int">Adultos</label>
                            <input 
                                type="number" 
                                id="adulto_int"  
                                min="0" 
                                className="small-input"
                                {...register("adulto_int", { valueAsNumber: true })}      
                            />
                            {errors.adulto_int && (
                                <ErrorMessage>{errors.adulto_int.message}</ErrorMessage>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="infante_int">Infantes</label>
                            <input 
                                type="number" 
                                id="infante_int" 
                                min="0" 
                                className="small-input"
                                {...register("infante_int", { valueAsNumber: true })}      
                            />
                            {errors.infante_int && (
                                <ErrorMessage>{errors.infante_int.message}</ErrorMessage>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="transito_int">Tránsito</label>
                            <input 
                                type="number" 
                                id="transito_int"  
                                min="0" 
                                className="small-input"
                                {...register("transito_int", { valueAsNumber: true })}      
                            />
                            {errors.transito_int && (
                                <ErrorMessage>{errors.transito_int.message}</ErrorMessage>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="conexion_int">Conexión</label>
                            <input 
                                type="number" 
                                id="conexion_int"  
                                min="0" 
                                className="small-input"
                                {...register("conexion_int", { valueAsNumber: true })}      
                            />
                            {errors.conexion_int && (
                                <ErrorMessage>{errors.conexion_int.message}</ErrorMessage>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="excento_int">Exentos</label>
                            <input 
                                type="number" 
                                id="excento_int"  
                                min="0" 
                                className="small-input"
                                {...register("excento_int", { valueAsNumber: true })}      
                            />
                            {errors.excento_int && (
                                <ErrorMessage>{errors.excento_int.message}</ErrorMessage>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='form-contenedor'>
            <div className='section-3col'>
                <div className="form-group">
                    <label htmlFor="pza_equipaje">Piezas de Equipaje</label>
                    <input 
                        type="number" 
                        id="pza_equipaje" 
                        min="0"
                        {...register("pza_equipaje", { valueAsNumber: true })}  
                    />
                    {errors.pza_equipaje && (
                        <ErrorMessage>{errors.pza_equipaje.message}</ErrorMessage>
                    )}
                </div>
                
                <div className="form-group">
                    <label htmlFor="kgs_equipaje">KGs de Equipaje</label>
                    <input 
                        type="number" 
                        id="kgs_equipaje" 
                        min="0" 
                        step="0.1"
                        {...register("kgs_equipaje", { valueAsNumber: true })}      
                    />
                    {errors.kgs_equipaje && (
                        <ErrorMessage>{errors.kgs_equipaje.message}</ErrorMessage>
                    )}
                </div>
                
                <div className="form-group">
                    <label htmlFor="kgs_carga">KGs de Carga</label>
                    <input 
                        type="number" 
                        id="kgs_carga" 
                        min="0" 
                        step="0.1"
                        {...register("kgs_carga", { valueAsNumber: true })}      
                    />
                    {errors.kgs_carga && (
                        <ErrorMessage>{errors.kgs_carga.message}</ErrorMessage>
                    )}
                </div>
            </div>
        </div>

        <div className='form-contenedor'>
            <h2 className="section-title">Información Adicional</h2>
            <div className='section-2col'>
                <div className="form-group">
                    <label htmlFor="correo">Correo</label>
                    <input 
                        type="text" 
                        id="correo" 
                        {...register("correo", {
                            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                                const upper = e.target.value.toUpperCase();
                                setValue("correo", upper);
                            },
                        })}  
                    />
                    {errors.correo && (
                        <ErrorMessage>{errors.correo.message}</ErrorMessage>
                    )}
                </div>
                
                <div className="form-group">
                    <label htmlFor="observaciones">Observaciones</label>
                    <textarea 
                        id="observaciones" 
                        {...register("observaciones", {
                            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                                const upper = e.target.value.toUpperCase();
                                setValue("observaciones", upper);
                            },
                        })}    
                    ></textarea>
                    {errors.observaciones && (
                        <ErrorMessage>{errors.observaciones.message}</ErrorMessage>
                    )}
                </div>                    
            </div>
        </div>
    </>
  )
}
