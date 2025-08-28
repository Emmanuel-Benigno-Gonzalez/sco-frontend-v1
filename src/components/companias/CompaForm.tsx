//import "../../styles/Compania/FormCompania.css";
import Select from "react-select";
import { useState } from "react";

export default function CompaniaForm() {
  const options = [
    { value: "AAL", label: "AAL" }, { value: "ABS", label: "ABS" }, { value: "ACA", label: "ACA" }, { value: "ACL", label: "ACL" }, { value: "ACR", label: "ACR" }, { value: "AEA", label: "AEA" }, { value: "AEC", label: "AEC" }, { value: "AEM", label: "AEM" }, { value: "AEP", label: "AEP" }, { value: "AER", label: "AER" }, { value: "AEV", label: "AEV" }, { value: "AEW", label: "AEW" }, { value: "AEX", label: "AEX" }, { value: "AGE", label: "AGE" }, { value: "AIJ", label: "AIJ" }, { value: "ALE", label: "ALE" }, { value: "ALS", label: "ALS" }, { value: "AMA", label: "AMA" }, { value: "AMD", label: "AMD" }, { value: "AMN", label: "AMN" }, { value: "AMX", label: "AMX" }, { value: "APO", label: "APO" }, { value: "AST", label: "AST" }, { value: "ATL", label: "ATL" }, { value: "AVA", label: "AVA" }, { value: "AVE", label: "AVE" }, { value: "AVX", label: "AVX" }, { value: "AZA", label: "AZA" }, { value: "BSK", label: "BSK" }, { value: "CAM", label: "CAM" }, { value: "CFE", label: "CFE" }, { value: "CFV", label: "CFV" }, { value: "CMP", label: "CMP" }, { value: "CNA", label: "CNA" }, { value: "COA", label: "COA" }, { value: "COM", label: "COM" }, { value: "CRS", label: "CRS" }, { value: "DCA", label: "DCA" }, { value: "DLH", label: "DLH" }, { value: "DMJ", label: "DMJ" }, { value: "EAF", label: "EAF" }, { value: "EAM", label: "EAM" }, { value: "EE4", label: "EE4" }, { value: "EIA", label: "EIA" }, { value: "EOL", label: "EOL" }, { value: "ETH", label: "ETH" }, { value: "FAE", label: "FAE" }, { value: "FAM", label: "FAM" }, { value: "FDX", label: "FDX" }, { value: "FLM", label: "FLM" }, { value: "GEM", label: "GEM" }, { value: "GMT", label: "GMT" }, { value: "HAL", label: "HAL" }, { value: "HYF", label: "HYF" }, { value: "IBE", label: "IBE" }, { value: "ICS", label: "ICS" }, { value: "JMG", label: "JMG" }, { value: "LAU", label: "LAU" }, { value: "LEC", label: "LEC" }, { value: "MAR", label: "MAR" }, { value: "MAS", label: "MAS" }, { value: "MCS", label: "MCS" }, { value: "MED", label: "MED" }, { value: "MEX", label: "MEX" }, { value: "MIL", label: "MIL" }, { value: "MLW", label: "MLW" }, { value: "MMM", label: "MMM" }, { value: "MXT", label: "MXT" }, { value: "NCR", label: "NCR" }, { value: "NKS", label: "NKS" }, { value: "OEM", label: "OEM" }, { value: "OVS", label: "OVS" }, { value: "PEG", label: "PEG" }, { value: "PFP", label: "PFP" }, { value: "PGR", label: "PGR" }, { value: "FGR", label: "FGR" }, { value: "PUE", label: "PUE" }, { value: "RAF", label: "RAF" }, { value: "SAE", label: "SAE" }, { value: "SAG", label: "SAG" }, { value: "SAI", label: "SAI" }, { value: "TAI", label: "TAI" }, { value: "SAN", label: "SAN" }, { value: "SKW", label: "SKW" }, { value: "SKY", label: "SKY" }, { value: "SLI", label: "SLI" }, { value: "STR", label: "STR" }, { value: "SUK", label: "SUK" }, { value: "SWG", label: "SWG" }, { value: "SWT", label: "SWT" }, { value: "TAM", label: "TAM" }, { value: "TAO", label: "TAO" }, { value: "TAR", label: "TAR" }, { value: "TCA", label: "TCA" }, { value: "TEA", label: "TEA" }, { value: "TIA", label: "TIA" }, { value: "TME", label: "TME" }, { value: "TNO", label: "TNO" }, { value: "TSM", label: "TSM" }, { value: "UAL", label: "UAL" }, { value: "UKL", label: "UKL" }, { value: "USA", label: "USA" }, { value: "UZB", label: "UZB" }, { value: "VIG", label: "VIG" }, { value: "VIV", label: "VIV" }, { value: "VLA", label: "VLA" }, { value: "VOI", label: "VOI" }, { value: "WHT", label: "WHT" }, { value: "WST", label: "WST" }, { value: "ZTA", label: "ZTA" }, { value: "WAM", label: "WAM" }, { value: "VCV", label: "VCV" }, { value: "SKA", label: "SKA" }, { value: "RER", label: "RER" }, { value: "7QE", label: "7QE" }, { value: "BUS", label: "BUS" }, { value: "ONE", label: "ONE" }, { value: "AET", label: "AET" }, { value: "CEN", label: "CEN" }, { value: "MAN", label: "MAN" }, { value: "ALM", label: "ALM" }, { value: "JEM", label: "JEM" }, { value: "CAI", label: "CAI" }, { value: "GN", label: "GN" }, { value: "PF", label: "PF" }, { value: "TAS", label: "TAS" }, { value: "AJL", label: "AJL" }, { value: "HEL", label: "HEL" }, { value: "USAF", label: "USAF" }, { value: "GXA", label: "GXA" }, { value: "SWQ", label: "SWQ" }, { value: "FLY", label: "FLY" }, { value: "IEA", label: "IEA" }, { value: "CMB", label: "CMB" }, { value: "ICASA", label: "ICASA" }, { value: "XXX", label: "XXX" }, { value: "ANX", label: "ANX" }, { value: "UDG", label: "UDG" }
  ];
  const [selectedId, setSelectedId] = useState<{ value: string; label: string } | null>(null);
  return (
    <form className="form-registro">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="id_compania">ID Compañía</label>
          <Select
            inputId="id_compania"
            options={options}
            value={selectedId}
            onChange={option => setSelectedId(option)}
            placeholder="Buscar o seleccionar..."
            isClearable
            isSearchable
            styles={{
              control: (base) => ({
                ...base,
                textTransform: 'uppercase',
                minHeight: '48px',
                height: '55px',
                fontSize: '1rem',
                borderRadius: '8px',
                boxShadow: 'none',
                borderColor: '#d1d5db',
                width: '100%',
                background: '#f8fafc'
              })
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            maxLength={100}
            placeholder="Ej: VivaAerobus"
            style={{ textTransform: 'uppercase' }}
            onInput={e => e.currentTarget.value = e.currentTarget.value.toUpperCase()}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mostrador">Mostrador</label>
          <input
            type="text"
            id="mostrador"
            maxLength={20}
            placeholder="Ej: 12"
             style={{ textTransform: 'uppercase' }}
              onInput={e => e.currentTarget.value = e.currentTarget.value.toUpperCase()}
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