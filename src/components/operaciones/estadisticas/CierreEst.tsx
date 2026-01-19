import HorarioEst from './HorariosEst';
import React, { useState } from "react";
import "../../../styles/operaciones/estadistica/CierreEstStyle.css";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  PieChart, Pie, Cell
} from "recharts";

import TopFBOEst from './TopFBOEst';
/*import Report3 from './Report3';
import Report4 from './Report4';
import Report5 from './Report5';
import Report6 from './Report6';
import Report7 from './Report7';
import Report8 from './Report8';
import Report9 from './Report9';*/

const Dashboard: React.FC = () => {
  const renderPieLabel = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, value, name } = props;
    const RADIAN = Math.PI / 180;
  // Acercar el label a la línea
  const radius = innerRadius + (outerRadius - innerRadius) * 1.15;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text x={x} y={y} fill="#0c2544" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central" fontSize={18} fontWeight="bold">
        {name}: {value}
      </text>
    );
  };

  const [showModal, setShowModal] = useState(true);
  const [selectedReport, setSelectedReport] = useState<number | null>(null);

  const menuOptions = [
    "Informe operacional cierre de mes y Estadísticas operacionales",
    "Estadísticas operacionales (operaciones por hora)",
    "Estadísticas operacionales (FBO´s con mayor operación)",
    "Comparativo presupuesto & real (Pasajeros comerciales)",
    "Comparativo presupuesto & real (Pasajeros aviación general)",
    "Comparativo presupuesto & real (Operaciones comerciales)",
    "Comparativo presupuesto & real (Operaciones aviación general)",
    "Comparativo presupuesto & real (Operaciones aviación de carga)",
    "Aerolíneas comerciales diciembre (Volaris & Viva Aerobus)",
    "Aerolíneas comerciales diciembre (Volaris & Viva Aerobus)"
  ];

  const comparativo = [
    { concepto: "Pasajeros", "2024": 143070, "2025": 164109 },
    { concepto: "Aviación Comercial", "2024": 134637, "2025": 155167 },
    { concepto: "Aviación General", "2024": 8433, "2025": 8942 },
  ];

  const operaciones = [
    { name: "Nacionales", value: 4992 },
    { name: "Internacionales", value: 850 },
  ];

  const carga = [
    { name: "Carga Nacional", value: 1086.46 },
    { name: "Carga Internacional", value: 1677.35 },
  ];

  const acumuladoOperaciones = [
    { name: "Aviación Comercial", "2024": 5876, "2025": 6638 },
    { name: "Aviación General", "2024": 37997, "2025": 39164 },
    { name: "Carga", "2024": 2406, "2025": 1766 },
  ];

  const acumuladoPasajeros = [
    { name: "Aviación Comercial", "2024": 872327, "2025": 1007770 },
    { name: "Aviación General", "2024": 67355, "2025": 71570 },
  ];

  const COLORS = ["#0d2c54", "#ff9800"];

  const cargaComparativo = [
    { year: "2024", toneladas: 3408 },
    { year: "2025", toneladas: 2813 },
  ];

  return (
    <div className="dashboard">
      {/* ===== Botón abrir menú ===== */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '20px' }}>
        <button
          onClick={() => setShowModal(true)}
          style={{
            fontSize: '1.4rem',
            padding: '12px 32px',
            borderRadius: '12px',
            border: 'none',
            background: '#0c2544',
            color: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Seleccionar reporte
        </button>
      </div>

      {/* ===== Modal selección ===== */}
      {showModal && (
        <div className="menu-modal-overlay">
          <div style={{
            background: '#fff',
            borderRadius: '24px',
            padding: '32px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
            minWidth: '600px',
            maxWidth: '900px',
            textAlign: 'center'
          }}>
            <h2 className="menu-modal-title">Selecciona un reporte</h2>
            <div className="menu-modal-grid">
              <div className="menu-modal-col">
                {menuOptions.slice(0, 5).map((option, idx) => (
                  <button
                    key={idx}
                    className="menu-modal-btn"
                    onClick={() => { setSelectedReport(idx); setShowModal(false); }}
                  >{option}</button>
                ))}
              </div>
              <div className="menu-modal-col">
                {menuOptions.slice(5).map((option, idx) => (
                  <button
                    key={idx+5}
                    className="menu-modal-btn"
                    onClick={() => { setSelectedReport(idx+5); setShowModal(false); }}
                  >{option}</button>
                ))}
              </div>
            </div>
            <button onClick={() => setShowModal(false)} className="menu-close-btn">Cerrar</button>
          </div>
        </div>
      )}

      {/* ===== Renderizar reportes o dashboard por defecto ===== */}
      {selectedReport === 1 ? (
        <HorarioEst />
      ) : selectedReport === 2 ? (
        <TopFBOEst />
      )/* : selectedReport === 3 ? (
        <Report3 />
      ) : selectedReport === 4 ? (
        <Report4 />
      ) : selectedReport === 5 ? (
        <Report5 />
      ) : selectedReport === 6 ? (
        <Report6 />
      ) : selectedReport === 7 ? (
        <Report7 />
      ) : selectedReport === 8 ? (
        <Report8 />
      ) : selectedReport === 9 ? (
        <Report9 />
      )*/ : (
        <>
          {/* ===== Tarjetas ===== */}
          <div className="cards">
            <div className="card highlight">
              <p style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>TOTAL</p>
              <p style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>PASAJEROS</p>
              <h3 className="highlight-number" style={{fontSize: '3.2rem', fontWeight: 'bold', marginBottom: '1rem'}}>164,109</h3>
              <div style={{display: 'flex', justifyContent: 'center', gap: '2.5rem', fontSize: '1.5rem', fontWeight: 'bold'}}>
                <div>
                  <div style={{marginBottom: '0.9rem'}}>NACIONALES</div>
                   <div style={{fontWeight: 'bold', fontSize: '2.2rem', color: '#fafbfdff'}}>161,836</div>
                </div>
                <div>
                  <div style={{marginBottom: '0.9rem'}}>INTERNACIONALES</div>
                   <div style={{fontWeight: 'bold', fontSize: '2.2rem', color: '#eceff1ff'}}>2,273</div>
                </div>
              </div>
            </div>
            <div className="card" style={{background: '#fff', borderRadius: '32px', padding: '2.5rem 0', boxShadow: '0 4px 24px rgba(0,0,0,0.07)'}}>
              <p style={{textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', color: '#0c2544', marginBottom: '0.5rem'}}>PAX AVIACIÓN COMERCIAL</p>
              <h3 style={{textAlign: 'center', fontSize: '3.2rem', fontWeight: 'bold', color: '#0c2544', marginBottom: '2rem'}}>155,167</h3>
              <div style={{display: 'flex', justifyContent: 'center', gap: '4rem', marginTop: '1.5rem'}}>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontWeight: 'bold', fontSize: '1.5rem', color: '#0c2544', marginBottom: '0.4rem'}}>NACIONALES</div>
                  <div style={{fontWeight: 'bold', fontSize: '2.2rem', color: '#0c2544'}}>154,829</div>
                </div>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontWeight: 'bold', fontSize: '1.5rem', color: '#0c2544', marginBottom: '0.3rem'}}>INTERNACIONALES</div>
                  <div style={{fontWeight: 'bold', fontSize: '2.2rem', color: '#0c2544'}}>338</div>
                </div>
              </div>
            </div>
            <div className="card">
                <p style={{textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', color: '#0c2544', marginBottom: '0.5rem'}}>PAX Aviación General</p>
              <h3 className="highlight-number" style={{fontSize: '3.2rem', fontWeight: 'bold', marginBottom: '1rem'}}>8,942</h3>
                <div style={{display: 'flex', justifyContent: 'center', gap: '4rem', marginTop: '1.2rem'}}>
                  <div style={{textAlign: 'center'}}>
                    <div style={{fontWeight: 'bold', fontSize: '1.5rem', color: '#0c2544', marginBottom: '0.3rem'}}>NACIONALES</div>
                    <div style={{fontWeight: 'bold', fontSize: '1.9rem', color: '#0c2544'}}>7,007</div>
                  </div>
                  <div style={{textAlign: 'center'}}>
                    <div style={{fontWeight: 'bold', fontSize: '1.5rem', color: '#0c2544', marginBottom: '0.3rem'}}>INTERNACIONALES</div>
                    <div style={{fontWeight: 'bold', fontSize: '1.9rem', color: '#0c2544'}}>1,935</div>
                  </div>
                </div>
            </div>
            <div className="card">
              <p style={{textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', color: '#0c2544', marginBottom: '0.5rem'}}>TOTAL OPERACIONES</p>
              <h3 className="highlight-number" style={{textAlign: 'center', fontSize: '3.2rem', fontWeight: 'bold', color: '#0c2544', marginBottom: '2rem'}}>5,842</h3>
              <div style={{display: 'flex', justifyContent: 'center', gap: '4rem', marginTop: '1.5rem'}}>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontWeight: 'bold', fontSize: '1.5rem', color: '#0c2544', marginBottom: '0.3rem'}}>NACIONALES</div>
                  <div style={{fontWeight: 'bold', fontSize: '1.9rem', color: '#0c2544'}}>4,992</div>
                </div>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontWeight: 'bold', fontSize: '1.5rem', color: '#0c2544', marginBottom: '0.3rem'}}>INTERNACIONALES</div>
                  <div style={{fontWeight: 'bold', fontSize: '1.9rem', color: '#0c2544'}}>850</div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Contenido / Charts ===== */}
          <div className="content">
            <div className="chart-row">
              <div className="chart">
                <h4>Comparativo 2024 vs 2025</h4>
                <BarChart width={500} height={400} data={comparativo}>
                  <XAxis dataKey="concepto" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="2024" fill="#0d2c54" />
                  <Bar dataKey="2025" fill="#ff9800" />
                </BarChart>
              </div>
              <div className="chart" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', minHeight: '420px' }}>
                <h4 style={{ textAlign: 'center', width: '100%' }}>Operaciones Nacionales vs Internacionales</h4>
                <PieChart width={800} height={400}>
                  <Pie data={operaciones} dataKey="value" outerRadius={140} labelLine={true} label={renderPieLabel} cx={400} cy={200}>
                    {operaciones.map((_, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </div>
            </div>

            <div className="chart-row">
              <div className="chart" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', minHeight: '420px' }}>
                <h4 style={{ textAlign: 'center', width: '100%' }}>Transporte de Carga (Toneladas)</h4>
                <PieChart width={800} height={400}>
                  <Pie data={carga} dataKey="value" innerRadius={100} outerRadius={140} label={renderPieLabel} cx={400} cy={200}>
                    {carga.map((_, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </div>
              <div className="chart">
                <h4>Toneladas de carga JULIO 2024 vs 2025</h4>
                <BarChart width={500} height={400} data={cargaComparativo}>
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="toneladas" fill="#0d2c54" />
                </BarChart>
              </div>
            </div>

            <div className="chart-row">
              <div className="chart">
                <h4>Acumulado Operaciones Julio (2024 - 2025)</h4>
                <BarChart width={500} height={400} data={acumuladoOperaciones}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="2024" fill="#0d2c54" />
                  <Bar dataKey="2025" fill="#ff9800" />
                </BarChart>
              </div>
              <div className="chart">
                <h4>Acumulado Pasajeros Julio (2024 - 2025)</h4>
                <BarChart width={500} height={400} data={acumuladoPasajeros}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="2024" fill="#0d2c54" />
                  <Bar dataKey="2025" fill="#ff9800" />
                </BarChart>
              </div>
            </div>
          </div>

          {/* ===== Tabla Julio ===== */}
          <div className="tabla-julio-card">
            <h4 className="tabla-titulo tabla-titulo-negro">Resultados Julio 2024 vs 2025</h4>
            <div className="tabla-scroll">
              <table className="tabla-julio">
                <thead>
                  <tr>
                    <th>Concepto</th>
                    <th>2024</th>
                    <th>2025</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td colSpan={3} className="subtitulo">Pasajeros</td></tr>
                  <tr><td>Aviación Comercial</td><td>134,637</td><td>155,167</td></tr>
                  <tr><td>Aviación General</td><td>8,433</td><td>8,942</td></tr>
                  <tr className="total-row"><td>Total</td><td>143,070</td><td>164,109</td></tr>
                  <tr><td colSpan={3} className="subtitulo">Operaciones</td></tr>
                  <tr><td>Aviación Comercial</td><td>877</td><td>1,032</td></tr>
                  <tr><td>Aviación General</td><td>4,635</td><td>4,570</td></tr>
                  <tr><td>Carga</td><td>322</td><td>240</td></tr>
                  <tr className="total-row"><td>Total</td><td>5,834</td><td>5,842</td></tr>
                  <tr><td>Carga (TNS)</td><td>3,369</td><td>2,763</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;