import "../../styles/aeronaves/formReg.css"

export default function AeroForm() {
  return (
    <div>
      <form className="form-registro">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="icao_aeronave">ICAO Aeronave</label>
            <input
              type="text"
              id="icao_aeronave"
              maxLength={4}
              placeholder="Ej: A320"
              style={{ textTransform: 'uppercase' }}
              onInput={e => e.currentTarget.value = e.currentTarget.value.toUpperCase()}
            />
          </div>
          <div className="form-group">
            <label htmlFor="iata_aeronave">IATA Aeronave</label>
            <input
              type="text"
              id="iata_aeronave"
              maxLength={3}
              placeholder="Ej: 320"
              style={{ textTransform: 'uppercase' }}
              onInput={e => e.currentTarget.value = e.currentTarget.value.toUpperCase()}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="max_pax">Máximo Pasajeros</label>
            <input
              type="number"
              id="max_pax"
              placeholder="Ej: 180"
            />
          </div>
          <div className="form-group">
            <label htmlFor="no_motores">Tipo de Motor</label>
            <input
              type="text"
              id="no_motores"
              maxLength={50}
              required
              style={{ textTransform: 'uppercase' }}
              onInput={e => e.currentTarget.value = e.currentTarget.value.toUpperCase()}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mtow">MTOW</label>
            <input
              type="number"
              id="mtow"
              step="any"
              placeholder="Ej: 73500"
            />
          </div>
          <div className="form-group">
            <label htmlFor="mzfw">MZFW</label>
            <input
              type="number"
              id="mzfw"
              step="any"
              placeholder="Ej: 62500"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="mldw">MLDW</label>
            <input
              type="number"
              id="mldw"
              step="any"
              placeholder="Ej: 66000"
            />
          </div>
          <div className="form-group">
            <label htmlFor="ancho">Ancho</label>
            <input
              type="number"
              id="ancho"
              step="any"
              placeholder="Ej: 34.1"
            />
          </div>
          <div className="form-group">
            <label htmlFor="altura">Altura</label>
            <input
              type="number"
              id="altura"
              step="any"
              placeholder="Ej: 11.8"
            />
          </div>
          <div className="form-group">
            <label htmlFor="largo">Largo</label>
            <input
              type="number"
              id="largo"
              step="any"
              placeholder="Ej: 37.6"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group" style={{ width: "100%" }}>
            <label htmlFor="descripcion">Descripción</label>
            <input
              type="text"
              id="descripcion"
              maxLength={255}
              placeholder="Ej: AIRBUS A320"
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
    </div>
  )
}