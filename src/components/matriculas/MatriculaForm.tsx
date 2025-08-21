import "../../styles/matriculas/FormMatricula.css";

export default function MatriculaForm() {
  return (
    <form className="form-registro">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="id_matricula">ID Matrícula</label>
          <input
            type="text"
            id="id_matricula"
            maxLength={10}
            placeholder="Ej: XAABC123"
             style={{ textTransform: 'uppercase' }}
              onInput={e => e.currentTarget.value = e.currentTarget.value.toUpperCase()}
          />
        </div>
        <div className="form-group">
          <label htmlFor="icao_aeronave">ICAO Aeronave</label>
          <input
            type="text"
            id="icao_aeronave"
            maxLength={4}
            placeholder="Ej: B738"
             style={{ textTransform: 'uppercase' }}
              onInput={e => e.currentTarget.value = e.currentTarget.value.toUpperCase()}
          />
        </div>
        <div className="form-group">
          <label htmlFor="id_calificador">ID Calificador</label>
          <input
            type="text"
            id="id_calificador"
            maxLength={5}
            placeholder="Ej: RP"
             style={{ textTransform: 'uppercase' }}
              onInput={e => e.currentTarget.value = e.currentTarget.value.toUpperCase()}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="id_compania">ID Compañía</label>
          <input
            type="text"
            id="id_compania"
            maxLength={5}
            placeholder="Ej: VIV"
             style={{ textTransform: 'uppercase' }}
              onInput={e => e.currentTarget.value = e.currentTarget.value.toUpperCase()}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fecha_registro">Fecha de Registro</label>
          <input
            type="datetime-local"
            id="fecha_registro"
          />
        </div>
        <div className="form-group">
          <label htmlFor="fecha_modificacion">Fecha de Modificación</label>
          <input
            type="datetime-local"        
            id="fecha_modificacion"
          />
        </div>
      </div>
      <div className="form-actions">
        <button type="reset" className="btn-secundario">Limpiar</button>
        <button type="submit" className="btn-primario">Guardar</button>
      </div>
    </form>
  );
}