import "../../../styles/operaciones/estadistica/HorarioEstStyles.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";

const llegadasData = [
  { hora: "14:00 a 14:59", value: 269, color: "#e11d48" }, 
  { hora: "11:00 a 11:59", value: 227, color: "#6294e0ff" }, 
  { hora: "12:00 a 12:59", value: 219, color: "#c188e0ff" }, 
  { hora: "10:00 a 10:59", value: 208, color: "#8aed97ff" }, 
  { hora: "19:00 a 19:59", value: 192, color: "#e6b250ff" }, 
  { hora: "16:00 a 16:59", value: 192, color: "#6bafcee7" }, 
];

const salidasData = [
  { hora: "09:00 a 09:59", value: 333, color: "#e11d48" },
  { hora: "10:00 a 10:59", value: 314, color: "#c188e0ff" }, 
  { hora: "11:00 a 11:59", value: 298, color: "#8aed97ff" },
  { hora: "08:00 a 08:59", value: 281, color: "#e6b250ff" }, 
  { hora: "12:00 a 12:59", value: 244, color: "#6bafcee7"}, 
];

const horariosData = [
  { horario: "11:00 a 11:59", valor: 525, color: "#e11d48"}, 
  { horario: "10:00 a 10:59", valor: 522, color: "#c188e0ff"}, 
  { horario: "09:00 a 09:59", valor: 510, color: "#8aed97ff" }, 
  { horario: "12:00 a 12:59", valor: 463, color: "#e6b250ff"}, 
  { horario: "08:00 a 08:59", valor: 445, color: "#6bafcee7" }, 
];

const HorariosEst = () => {
  return (
  <div className="modern-dash-container" style={{ width: '1520px', margin: '0 auto', padding: '0 2rem', boxSizing: 'border-box' }}>
      <div style={{
        width: '100%',
        background: 'linear-gradient(90deg, #10346b 60%, #10346b 100%)',
        borderRadius: '0 0 32px 32px',
        display: 'flex',
        alignItems: 'center',
        padding: '1.5rem 2rem',
        marginBottom: '2rem',
        minHeight: '120px',
        boxSizing: 'border-box',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div>
            <h1 style={{ fontWeight: 'bold', fontSize: '2rem', color: '#fff', margin: 0, letterSpacing: '1px', textAlign: 'left' }}>
            </h1>
          </div>
        </div>
        <div style={{ textAlign: 'right', color: '#fff', fontWeight: 400 }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>Por ti y para ti</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '0.2rem' }}>Gerencia de Operaciones</div>
        </div>
      </div>

   
      <div className="modern-dash-grid">
        <div className="modern-dash-card modern-dash-ops">
          <div className="modern-dash-ops-title">TOTAL DE OPERACIONES</div>
          <div className="modern-dash-ops-total">5,842</div>
          <div className="modern-dash-ops-row">
            <div>
              <div className="modern-dash-ops-label">LLEGADAS</div>
              <div className="modern-dash-ops-value">2,876</div>
            </div>
            <div>
              <div className="modern-dash-ops-label">SALIDAS</div>
              <div className="modern-dash-ops-value">2,966</div>
            </div>
          </div>
        </div>

     
        <div className="modern-dash-card modern-dash-bar">
          <div className="modern-dash-label">
             <h3 style={{ alignSelf: 'flex-start', fontSize: '2rem' }}>HORARIO CON MAYOR OPERATIVIDAD JULIO 2025 (LLEGADAS Y SALIDAS)</h3>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart
              data={horariosData}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                type="number"
                fontSize={1}
                tick={{ fill: "#333", fontWeight: "bold", fontSize: 20 }}
                domain={[400, 540]}
              />
              <YAxis
                type="category"
                dataKey="horario"
                fontSize={2}
                tick={{ fill: "#333", fontWeight: "bold", fontSize: 17 }}
                width={120}
              />
              <Tooltip />
              <Bar dataKey="valor" radius={[0, 6, 6, 0]} barSize={32}>
                {horariosData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

       
        <div className="modern-dash-card modern-dash-bar">
          <div className="modern-dash-label">
              <h3 style={{ alignSelf: 'flex-start', fontSize: '2rem' }}> HORARIO CON MAYOR OPERATIVIDAD JULIO 2025 (LLEGADAS)</h3>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart
              data={llegadasData}
              layout="vertical"
              margin={{ top: 8, right: 30, left: 20, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                type="number"
                fontSize={4}
                tick={{ fill: "#333", fontWeight: "bold", fontSize: 20 }}
                domain={[0, 300]}
              />
              <YAxis
                type="category"
                dataKey="hora"
                fontSize={3}
                tick={{ fill: "#333", fontWeight: "bold", fontSize: 17 }}
                width={120}
              />
              <Tooltip />
        <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={32}>
                {llegadasData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="modern-dash-card modern-dash-bar">
          <div className="modern-dash-label">
             <h3 style={{ alignSelf: 'flex-start', fontSize: '1.8rem' }}> HORARIO CON MAYOR OPERATIVIDAD JULIO 2025 (SALIDAS)</h3>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart
              data={salidasData}
              layout="vertical"
              margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                type="number"
                fontSize={13}
                tick={{ fill: "#333", fontWeight: "bold", fontSize: 20 }}
                domain={[0, 350]}
              />
              <YAxis
                type="category"
                dataKey="hora"
                fontSize={8}
                tick={{ fill: "#333", fontWeight: "bold", fontSize: 17 }}
                width={120}
              />
              <Tooltip />
        <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={32}>
                {salidasData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

  
      <div className="modern-dash-footer">
      </div>
    </div>
  );
};

export default HorariosEst;