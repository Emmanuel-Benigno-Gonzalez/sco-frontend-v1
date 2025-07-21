import "../../styles/aeronaves/formReg.css"

export default function AeroForm() {
  return (
    <>
        <div>AeroForm</div>

        <div className="form-group">
            <label htmlFor="posicion">Posición</label>
            <input 
                type="text" 
                id="posicion" 
            />
            
        </div>
    </>
    
  )
}
