import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios"; 


interface ATDSalidaRecord {
  id: string;
  matricula: string;
  compania: string;
  fechaHoraReal: string;
  fechaHoraItinerario: string;
  atd: string;
}

interface OperacionSAPI {
  id_ops: string;
  id_matricula: string;
  id_compania: string;
  fecha_iniOps: string;
  fecha_iti: string;
  token_finOps: number | null;
}

// nuevo tipado del error del backend 
interface BackendError {
  message?: string;
  error?: string;
  data?: string;
}

// convertir el formato de fecha
const formatearFecha = (fechaISO: string): string => {
  const fecha = new Date(fechaISO);

  return fecha
    .toLocaleString("es-MX", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .replace(",", "")
    .replace("a.m.", "a. m.")
    .replace("p.m.", "p. m.");
};


//Convertimos el formato del back al formato que recibe le input
const DatetimeLocal = (iso: string): string => {
  if (!iso) return "";
  const date = new Date(iso);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate()
  )}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
};

//Convertir valor de Input al Formato de fecha que recibe el Back
const datetimeLocal = (value: string): string => {
  return value;
};


const ATDSalidasTable = () => {
  const [records, setRecords] = useState<ATDSalidaRecord[]>([]);
  const [selected, setSelected] = useState<ATDSalidaRecord | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [finalizandoId, setFinalizandoId] = useState<string | null>(null);

  // Estados para el modal
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState<"success" | "error">("success");

  const fechaActual = DatetimeLocal(new Date().toISOString());

  useEffect(() => {
    const fetchSalidas = async (): Promise<void> => {
      try {
        const response = await axios.get<{ data: OperacionSAPI[] }>(
          "http://localhost:3000/api/ops/operacion/salidasPendientes"
        );

        const formatted: ATDSalidaRecord[] = response.data.data.map(
          (op): ATDSalidaRecord => ({
            id: op.id_ops,
            matricula: op.id_matricula,
            compania: op.id_compania,
            fechaHoraReal: op.fecha_iniOps,
            fechaHoraItinerario: op.fecha_iti,
            atd: "",
          })
        );

        console.log("DATOS REALES DE LA API:", formatted);
        setRecords(formatted);
      } catch (error) {
        console.error("Error Cargando ATD Salida", error);
      }
    };

    fetchSalidas();
  }, []);


  const handleGuardar = async (): Promise<void> => {
    if (!selected) return;

    try {
      await axios.put(
        `http://localhost:3000/api/ops/operacion/fecha_finOps/${selected.id}`,
        {
          token_finOps: 1,
          fecha_finOps: selected.atd
            ? datetimeLocal(selected.atd)
            : new Date().toISOString(),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setModalMessage("ATD de salida finalizado correctamente");
      setModalType("success");
      setShowModal(true);

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

    } catch (error) {
      //manejo real del error backend 
      const err = error as AxiosError<BackendError>;

      setModalMessage(
        err.response?.data?.message ||
          err.response?.data?.error ||
          "Error al cerrar ATD Salida"
      );
      setModalType("error");
      setShowModal(true);
    }
  };


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
                <td>{formatearFecha(r.fechaHoraReal)}</td>
                <td>{formatearFecha(r.fechaHoraItinerario)}</td>
                <td>{r.atd || "--"}</td>
                <td>
                  <span className="status plataforma">Plataforma</span>
                </td>
                <td>
                  <button
                    className="btn-atd"
                    onClick={() =>
                      setSelected({
                        ...r,
                        atd: fechaActual,
                      })
                    }
                  >
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
            <h3>Finalizar ATD – Salida</h3>

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
                  <td>{formatearFecha(selected.fechaHoraReal)}</td>
                  <td>
                    <input
                      type="datetime-local"
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

      {/* MOdal */}
      {showModal && (
        <div className="modal-backdrop">
          <div className={`modal ${modalType}`}>
            {modalType === "error" ? (
              <div className="error-icon">❌</div>
            ) : (
              <div className="success-icon">
                <svg viewBox="0 0 52 52">
                  <circle
                    className="success-circle"
                    cx="26"
                    cy="26"
                    r="25"
                  />
                  <path
                    className="success-check"
                    d="M14 27 L22 35 L38 18"
                  />
                </svg>
              </div>
            )}

            <h3>{modalType === "error" ? "Error" : "Éxito"}</h3>
            <p>{modalMessage}</p>

            <button
              className="btn-guardar"
              onClick={() => setShowModal(false)}
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ATDSalidasTable;