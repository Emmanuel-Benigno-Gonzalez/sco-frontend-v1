import { useState } from "react";

interface ATDRecord {
  id: number;
  matricula: string;
  compania: string;
  fechaHoraReal: string;
  fechaHoraItinerario: string;
  atd: string;
}

const ATDTable = () => {
  const [records, setRecords] = useState<ATDRecord[]>([
    {
      id: 1,
      matricula: "Y4368",
      compania: "VIV",  
      fechaHoraReal: "2025-01-15 14:32",
      fechaHoraItinerario: "2025-01-15 14:10",
      atd: "",
    },
    {
      id: 2,
      matricula: "XAPRO",
      compania: "VOL",
      fechaHoraReal: "2025-01-15 15:05",
      fechaHoraItinerario: "2025-01-15 14:50",
      atd: "",
    },
    {
      id: 3,
      matricula: "Y43483",
      compania: "VIV",
      fechaHoraReal: "2025-01-15 15:05",
      fechaHoraItinerario: "2025-01-15 14:50",
      atd: "",
    },
    {
      id: 4,
      matricula: "VB7032",
      compania: "VOL",
      fechaHoraReal: "2025-01-15 15:05",
      fechaHoraItinerario: "2025-01-15 14:50",
      atd: "",
    },
    {
      id: 5,
      matricula: "Y4560",
      compania: "VIV",
      fechaHoraReal: "2025-01-15 15:05",
      fechaHoraItinerario: "2025-01-15 14:50",
      atd: "",
    },
    {
      id: 6,
      matricula: "VB4043",
      compania: "VIV",
      fechaHoraReal: "2025-01-15 15:05",
      fechaHoraItinerario: "2025-01-15 14:50",
      atd: "",
    },
  ]);

  const [selected, setSelected] = useState<ATDRecord | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [finalizandoId, setFinalizandoId] = useState<number | null>(null);
  //const [alertMessage, setAlertMessage] =  useState<string  | null>(null);
  //const [alertType, setAlertType] = useState <"error" | "success">("error"); 
 
  const fechaActual = new Date().toLocaleString("es-MX", {
    dateStyle: "short",
    timeStyle: "short",
  });

    const handleGuardar = () => {
    if (!selected) return;

    const id = selected.id;

    setSelected(null);
    setEditMode(false);
    
    setTimeout(() => {
      setFinalizandoId(id);

      setTimeout(() => {
        setRecords(prev => prev.filter(r => r.id !== id));
        setFinalizandoId(null);
      }, 500);
    }, 200);
};


 /* const handleGuardar = async () => {
  if (!selected) return;

  try {
    //  Simulación backend
    const backendOk = false; 

    if (!backendOk) {
      throw new Error("No se pudo finalizar la operación ATD");
    }

    const id = selected.id;

    // Cerrar modal
    setSelected(null);
    setEditMode(false);

    setTimeout(() => {
      setFinalizandoId(id);

      setTimeout(() => {
        setRecords(prev => prev.filter(r => r.id !== id));
        setFinalizandoId(null);
      }, 500);
    }, 200);

  } catch (error) {
    setAlertType("error");
    setAlertMessage(
      error instanceof Error ? error.message : "Error inesperado del servidor"
    );
  }
};*/


  return (
    <>
      <div className="atd-table-wrapper">
        <table className="atd-table">
          <thead>
            <tr>
              <th>Matrícula</th>
              <th>Compañía</th>
              <th>Fecha / Hora Real</th>
              <th>Fecha / Hora Itinerario</th>
              <th>ATD</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {records.map(r => (
              <tr
                key={r.id}
                className={finalizandoId === r.id ? "row-finalizando" : ""}
              >
                <td>{r.matricula}</td>
                <td>{r.compania}</td>
                <td>{r.fechaHoraReal}</td>
                <td>{r.fechaHoraItinerario}</td>
                <td>{r.atd || "--"}</td>
                <td>
                  <span className="status plataforma">Plataforma</span>
                </td>
                <td>
                  <button className="btn-atd" onClick={() => {
                    setSelected({
                      ...r,
                      atd: fechaActual,
                    });
                    setEditMode(false);
                  }}>
                    Finalizar Operación
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     
      {selected && (
        <div className="modal-overlay">
          <div className="modal modal-wide">
            <h3>Finalizar ATD</h3>

            <table className="modal-table">
              <thead>
                <tr>
                  <th>Matrícula</th>
                  <th>Compañía</th>
                  <th>Fecha / Hora Real</th>
                  <th>ATD</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{selected.matricula}</td>
                  <td>{selected.compania}</td>
                  <td>{selected.fechaHoraReal}</td>
                  <td>
                    <input
                      value={selected.atd}
                      disabled={!editMode}
                      onChange={e =>
                        setSelected({ ...selected, atd: e.target.value })
                      }
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="modal-actions">
              <button
                className="btn-cancelar"
                onClick={() => {
                  setSelected(null);
                  setEditMode(false);
                }}
              >
                Cancelar
              </button>

              {!editMode && (
                <button
                  className="btn-editar"
                  onClick={() => setEditMode(true)}
                >
                  Editar
                </button>
              )}

              <button className="btn-guardar" onClick={handleGuardar}>
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}

      {/*{alertMessage && (
        <div className="modal-overlay">
          <div className={`modal alert ${alertType}`}>
            <h3>{alertType === "error" ? "❌ Error" : "✅ Éxito"}</h3>

            <p>{alertMessage}</p>

            <div className="modal-actions">
              <button
                className="btn-guardar"
                onClick={() => setAlertMessage(null)}
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )*/}
    </>
  );
};

export default ATDTable;
