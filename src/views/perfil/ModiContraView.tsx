import ContraForm from "../../components/perfil/ContraForm";

  export default function ModiContraView() {
    return (
      <>
        <h2>Actualizar Usuario</h2>
        <form action="">
          <ContraForm
            token_contraseña ={true}
            idUsuario=""
          />
        </form>
      </>
    );
  }
