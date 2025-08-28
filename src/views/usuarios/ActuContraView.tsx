import ActuContraForm from "../../components/usuarios/ActuContraForm";

export default function ActuContraView() {
    return (
        <>
            <h2>Actualizar Usuario</h2>
            <form action="">
                <ActuContraForm 
                token_contraseña ={true}
                //idUsuario=""
                />
            </form>
        </>
    );
}