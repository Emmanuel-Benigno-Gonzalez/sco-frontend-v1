import React from "react";
import "../../../styles/operaciones/estadistica/TopFBOEstStyles.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList, Cell } from "recharts";

const data = [
  { name: "SAE", value: 742 },
  { name: "ALE", value: 654 },
  { name: "EIA", value: 429 },
  { name: "EOL", value: 335 },
  { name: "AVE", value: 318 },
  { name: "AST", value: 276 },
  { name: "EAE", value: 264 },
  { name: "ICS", value: 256 },
  { name: "ACR", value: 255 },
  { name: "MAN", value: 192 },
  { name: "FLM", value: 182 },
  { name: "CEN", value: 105 },
  { name: "PEG", value: 75 },
  { name: "VLA", value: 74 },
  { name: "AEP", value: 71 }
];

const barColors = [
  '#4682B4', 
  '#5DADE2', 
  '#F5B041', 
  '#DC7633', 
  '#58D68D', 
  '#F7DC6F', 
  '#C0392B', 
  '#8E44AD', 
  '#F39C12', 
  '#7B7D7D', 
  '#BB8FCE', 
  '#27AE60', 
  '#154360', 
  '#1ABC9C', 
  '#229954'  
];

const TopFBOEst: React.FC = () => {
  return (
    <div className="report2-bg">
      <div className="report2-header">
        <div className="subtitle">Por ti y para ti<br />Gerencia de Operaciones</div>
      </div>
      <div className="report2-chart-container">
        <h2 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2.2rem', marginBottom: 24 }}>
          TOP 15 AEROLÍNEAS MÁS ACTIVAS JULIO 2025
        </h2>
        <ResponsiveContainer width="100%" height={750}>
          <BarChart data={data} layout="vertical" margin={{ left: 40, right: 40, top: 20, bottom: 20 }}>
            <XAxis type="number" domain={[0, 800]} tick={{ fontSize: 18, fontWeight: "bold", fill: "#333" }} />
            <YAxis type="category" dataKey="name" tick={{ fontSize: 18, fontWeight: "bold", fill: "#333" }} width={80} />
            <Tooltip formatter={(value: number) => value.toLocaleString()} />
            <Bar dataKey="value" radius={[0, 16, 16, 0]} barSize={24}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]} />
              ))}
              <LabelList dataKey="value" position="right" style={{ fontWeight: 'bold', fontSize: 18, fill: '#333' }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="report2-footer">
        <div className="subtitle">Cierre de Julio 2025</div>
      </div>
    </div>
  );
};

export default TopFBOEst;