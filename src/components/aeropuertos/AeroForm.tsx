//import "../../styles/aeropuerto/formAerop.css";

export default function AeropuertoForm() {
  return (
    <form className="form-registro">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="iata_aeropuerto">IATA</label>
          <input
            type="text"
            id="iata_aeropuerto"
            maxLength={4}
            placeholder="Ej: TLC"
            style={{ textTransform: 'uppercase' }}
            onInput={e => e.currentTarget.value = e.currentTarget.value.toUpperCase()}
          />
        </div>
        <div className="form-group">
          <label htmlFor="oaci_aeropuerto">OACI</label>
          <input
            type="text"
            id="oaci_aeropuerto"
            maxLength={4}
            placeholder="Ej: MMTO"
             style={{ textTransform: 'uppercase' }}
              onInput={e => e.currentTarget.value = e.currentTarget.value.toUpperCase()}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            maxLength={100}
            placeholder="Ej: Aeropuerto Internacional de Toluca"
            style={{ textTransform: 'uppercase' }}
            onInput={e => e.currentTarget.value = e.currentTarget.value.toUpperCase()}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            id="ciudad"
            maxLength={100}
            placeholder="Ej: Toluca"
            style={{ textTransform: 'uppercase' }}
            onInput={e => e.currentTarget.value = e.currentTarget.value.toUpperCase()}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pais">País</label>
          <input
            type="text"
            id="pais"
            maxLength={100}
            placeholder="Ej: México"
             style={{ textTransform: 'uppercase' }}
             onInput={e => e.currentTarget.value = e.currentTarget.value.toUpperCase()}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tipo_aeropuerto">Tipo</label>
          <select id="tipo_aeropuerto" defaultValue="">
            <option value="" disabled>Seleccione...</option>
            <option value="D">D - Doméstico</option>
            <option value="I">I - Internacional</option>
          </select>
        </div>
      </div>
      <div className="form-actions">
        <button type="reset" className="btn-secundario">Limpiar</button>
        <button type="submit" className="btn-primario">Guardar</button>
          </div>
    </form>
)
}