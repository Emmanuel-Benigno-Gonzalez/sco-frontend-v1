import type { UseFormRegister, FieldErrors, UseFormSetValue } from 'react-hook-form'
import ErrorMessage from "../ErrorMessage";
import type { OpsFormData }  from "../../types"
import "../../styles/operaciones/formCapOps.css"

type OpsFormProps = {
    register: UseFormRegister<OpsFormData>
    errors: FieldErrors<OpsFormData>
    setValue: UseFormSetValue<OpsFormData>
}

export default function CapSOpsForm({ register, errors, setValue } : OpsFormProps) {

    /*const handleLlegadaSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }*/

    return (

        <>
            
            <div className="card salidas" >
                <h2 className="card-title">
                <img alt="" className="title-icon" />
                🛫 Salida
                </h2>

                <div className="form-grid">
                <div>
                    <label>Fecha/Hora Itinerario</label>
                    <input
                        type="datetime-local"
                        id="fecha_iti"
                        {...register("fecha_iti")}
                        />
                        {errors.fecha_iti &&(
                            <ErrorMessage>{errors.fecha_iti.message}</ErrorMessage>
                        )} 
                </div>

                <div>
                    <label>Fecha/Hora Real</label>
                    <input 
                    type="datetime-local"
                    id="fecha_iniOps"
                    {...register("fecha_iniOps")} 
                    />
                    {errors.fecha_iniOps && (
                        <ErrorMessage>{errors.fecha_iniOps.message}</ErrorMessage>
                    )}            
                </div>

                <div>
                    <label>Aeropuerto IATA</label>
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

                <div>
                    <label>Compañía</label>
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

                <div>
                    <label>No. Vuelo</label>
                    <input 
                    type="text"
                    id="vuelo"
                    placeholder="Ej: Y4368" 
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

                <div>
                    <label>Calificador</label>
                    <select id="id_calificador"
                    {...register("id_calificador")}
                    >
                    <option value="" disabled>Selecciona una Opción</option>
                    <option value="RP">Comercial Regular de Pasajeros</option>
                    <option value="FP">Comercial Fletamento de Pasajeros</option>
                    </select>
                    {errors.id_calificador && (
                    <ErrorMessage>{errors.id_calificador.message}</ErrorMessage>
                    )} 
                </div>

                <div>
                    <label>Tipo de Movimiento</label>
                    <select id="tipo_mov"
                    {...register("tipo_mov")}
                    >
                    <option value="" disabled>Selecciona una Opción</option>
                    <option value="S">Salida</option>
                    <option value="LL">Llegada</option>
                    </select>
                    {errors.tipo_mov && (
                    <ErrorMessage>{errors.tipo_mov.message}</ErrorMessage>
                    )}
                </div>

                <div>
                    <label>Tipo de Plataforma</label>
                    <select id="tipo_plataforma"
                    {...register("tipo_plataforma")}
                    >
                    <option value="" disabled>Seleccione una Opción</option>
                    <option value="TA">Turn Around</option>
                    <option value="RN">Pernota Norte</option>
                    <option value="HG">Pernota H</option>
                    </select>
                    {errors.tipo_plataforma && (
                    <ErrorMessage>{errors.tipo_plataforma.message}</ErrorMessage>
                    )}
                </div>

                <div>
                    <label>Pista</label>
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

                <div>
                    <label>Pocisión</label>
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

                <div>
                    <label>Puerta</label>
                    <input
                    type="number"
                    id="puerta"
                    min="0" 
                    placeholder="0" 
                    {...register("puerta", {valueAsNumber: true })}
                    />
                    {errors.puerta && (
                        <ErrorMessage>{errors.puerta.message}</ErrorMessage>
                    )}
                </div>

                <div>
                    <label>Banda</label>
                    <input
                    type="number"
                    min="0" 
                    placeholder="0"
                    {...register("banda", {valueAsNumber: true })}
                    />
                    {errors.banda && (
                        <ErrorMessage>{errors.banda.message}</ErrorMessage>
                    )}
                </div>

                {/*<div>
                    <label>No. Pasajeros</label>
                    <input type="number" placeholder="Ej: 120" />
                </div>*/}

                <div className="section-title nacionales">
                <span>Nacionales</span>
                </div>


                <div>
                    <label>Adultos</label>
                    <input
                    type="number"
                    id="adulto_nac"
                    min="0"
                    placeholder="0"
                    {...register("adulto_nac", {valueAsNumber: true })}
                    />
                    {errors.adulto_nac && (
                        <ErrorMessage>{errors.adulto_nac.message}</ErrorMessage>
                    )}
                </div>

                <div>
                    <label>Infantes</label>
                    <input
                    type="number"
                    id="infante_nac"
                    min="0" 
                    placeholder="0"
                    {...register("infante_nac", { valueAsNumber: true })}
                    />
                    {errors.infante_nac && (
                    <ErrorMessage>{errors.infante_nac.message}</ErrorMessage>
                    )}
                </div>

                <div>
                    <label>Tránsito</label>
                    <input
                    type="number"
                    id="transito_nac"
                    min="0" 
                    placeholder="0"
                    {...register("transito_nac", { valueAsNumber: true })}
                    />
                    {errors.transito_nac && (
                        <ErrorMessage>{errors.transito_nac.message}</ErrorMessage>
                    )}
                </div>

                <div>
                    <label>Conexión</label>
                    <input
                    type="number"
                    id="conexion_nac"
                    min="0" 
                    placeholder="0" 
                    {...register("conexion_nac", { valueAsNumber: true })}
                    />
                    {errors.conexion_nac && (
                        <ErrorMessage>{errors.conexion_nac.message}</ErrorMessage>
                    )}
                </div>

                <div>
                    <label>Exentos</label>
                    <input
                    type="number"
                    id="excento_nac" 
                    min="0"
                    placeholder="0" 
                    {...register("excento_nac", { valueAsNumber: true })}
                    />
                    {errors.excento_nac && (
                        <ErrorMessage>{errors.excento_nac.message}</ErrorMessage>
                    )}
                </div>

                <div className="section-title internacionales">
                    <span>Internacionales</span>
                </div>

                <div>
                    <label>Adultos</label>
                    <input
                    type="number" 
                    id="adulto_int"
                    min="0"
                    placeholder="0" 
                    {...register("adulto_int", { valueAsNumber: true })}
                    />
                    {errors.adulto_int && (
                    <ErrorMessage>{errors.adulto_int.message}</ErrorMessage>
                    )}
                </div>

                <div>
                    <label>Infantes</label>
                    <input
                    type="number"
                    id="infante_int"
                    min="0" 
                    placeholder="0" 
                    {...register("infante_int", { valueAsNumber: true })}
                    />
                    {errors.infante_int && (
                        <ErrorMessage>{errors.infante_int.message}</ErrorMessage>
                    )}
                </div>

                <div>.
                    <label>Tránsito</label>
                    <input
                    type="number"
                    id="transito_int"
                    min="0" 
                    placeholder="0" 
                    {...register("transito_int", { valueAsNumber: true })}
                    />
                    {errors.transito_int && (
                        <ErrorMessage>{errors.transito_int.message}</ErrorMessage>
                    )}
                </div>

                <div>
                    <label>Conexión</label>
                    <input
                    type="number"
                    id="conexion_int"
                    min="0" 
                    placeholder="0" 
                    {...register("conexion_int", { valueAsNumber: true })}
                    />
                    {errors.conexion_int && (
                        <ErrorMessage>{errors.conexion_int.message}</ErrorMessage>
                    )}   
                </div>

                <div>
                    <label>Exentos</label>
                    <input
                    type="number"
                    id="excento_int"
                    min="0" 
                    placeholder="0" 
                    {...register("excento_int", { valueAsNumber: true })}
                    />
                    {errors.excento_int && (
                        <ErrorMessage>{errors.excento_int.message}</ErrorMessage>
                    )}
                </div>

                
                <div className="section-title carga">
                    <span>Carga</span>
                </div> 

                <div>
                    <label>Piezas de Equipaje</label>
                    <input
                    type="number"
                    id="pza_equipaje"
                    min="0"
                    step="0.1" 
                    placeholder="0"
                    {...register("pza_equipaje", { valueAsNumber: true })}
                    />
                    {errors.pza_equipaje && (
                        <ErrorMessage>{errors.pza_equipaje.message}</ErrorMessage>
                    )}
                </div>

                <div>
                    <label>Kg de Equipaje</label>
                    <input
                    type="number"
                    id="kgs_equipaje"
                    min="0"
                    step="0.1" 
                    placeholder="0"
                    {...register("kgs_equipaje", { valueAsNumber: true })}
                    />
                    {errors.kgs_equipaje && (
                        <ErrorMessage>{errors.kgs_equipaje.message}</ErrorMessage>
                    )}
                </div>

                <div>
                    <label>Kg Crga</label>
                    <input
                    type="number"
                    id="kgs_carga"
                    min="0"
                    step="0.1"
                    placeholder="0"
                    {...register("kgs_carga", { valueAsNumber: true })}
                    />
                    {errors.kgs_carga && (
                        <ErrorMessage>{errors.kgs_carga.message}</ErrorMessage>
                    )}
                </div>
                
                </div>

                <label>Observaciones</label>
                <textarea
                id="observaciones"
                {...register("observaciones", {
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                    const upper = e.target.value.toUpperCase();
                    setValue("observaciones", upper);
                },
                })}
                placeholder="Escribe aquí cualquier observación relevante..."></textarea>


                <div>
                <button className="btn-cancelar">Cancelar</button>
                <button type="submit" className="btn-guardar">Registrar Salida</button>
                </div>
            </div>
        </>
    )
}