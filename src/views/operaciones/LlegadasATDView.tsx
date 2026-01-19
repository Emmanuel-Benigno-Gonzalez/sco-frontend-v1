import ATDTable from "../../components/operaciones/LlegadasATDTabla";
import "../../styles/operaciones/tablaATDOps.css";

const LlegadasATDTabla = () => {
  return (
    <div className="atd-container">
      <h2 className="atd-title">ATD – Actual Time of Departure</h2>
      <ATDTable />
    </div>
  );
};

export default LlegadasATDTabla;   
