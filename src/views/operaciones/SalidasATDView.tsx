import ATDTable from "../../components/operaciones/SalidasATDTabla";
import "../../styles/operaciones/tablaATDOps.css";

const SalidasATDTabla = () => {
  return (
    <div className="atd-container">
      <h2 className="atd-title">ATD – Actual Time of Departure</h2>
      <ATDTable />
    </div>
  );
};

export default SalidasATDTabla;   