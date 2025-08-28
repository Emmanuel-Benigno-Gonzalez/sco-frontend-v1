//import "../../styles/calificadores/CaliForm.css"

const opcionesid_calificador = [
  "RP", "GXAA", "GXTA", "GXBA", "GXAH", "RC", "GXCA", "GXCH", "FP", "FC",
  "GMLA", "GXBH", "ALT", "CXL", "GXTH", "PB", "CX", "GMLH", "ALTC", "CBKE",
  "CTL", "CFP", "CC", "SC", "SP", "CTC", "CFC", "VDC", "CRC", "ATLC"
];

export default function AeroForm() {
  return (
    <form className="form-registro">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="id_calificador">ID Calificador</label>
          <select id="id_calificador">
            <option value="">Seleccione una opción</option>
            {opcionesid_calificador.map(opcion => (
              <option key={opcion} value={opcion}>{opcion}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="clasificacion">Clasificación</label>
          <input
            type="text"
            id="clasificacion"
            maxLength={50}
            placeholder="Ej: Nacional"
            style={{ textTransform: 'uppercase' }}
            onInput={e => e.currentTarget.value = e.currentTarget.value.toUpperCase()}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group" style={{ width: "100%" }}>
          <label htmlFor="descripcion">Descripción</label>
          <input
            type="text"
            id="descripcion"
            maxLength={100}
            placeholder="Ej: CALIFICADOR DE AEROPUERTO"
            style={{ textTransform: 'uppercase', width: "100%" }}
            onInput={e => e.currentTarget.value = e.currentTarget.value.toUpperCase()}
          />
        </div>
      </div>
      <div className="form-actions">
        <button type="reset" className="btn-secundario">Limpiar</button>
        <button type="submit" className="btn-primario">Guardar</button>
      </div>
    </form>
  )
}