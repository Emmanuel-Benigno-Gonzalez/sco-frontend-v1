import LoginView from "../views/auth/LoginView"
import "../styles/auth/FormLogin.css"

export default function AuthLayout() {
  return (
    <div className="split-bg">
      <div className="split-left">
        <h1 className="main-title">Dirección de Operaciones</h1>
        <div className="degradado-sobre-imagen"></div>
      </div>
      <div className="split-right">
        <div className="sco-top-right">
          <span>SCOperaciones</span>
        </div>
        <LoginView />
      </div>
    </div>
  )
}
