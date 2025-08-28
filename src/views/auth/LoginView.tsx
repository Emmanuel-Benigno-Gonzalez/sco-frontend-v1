import { useState } from "react"

export default function LoginView() {
  const [userId, setUserId] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres.")
      return
    }
    setError("")
    // Aquí puedes agregar la lógica de autenticación
  }

  const handlePasswordChange = (value: string) => {
    setPassword(value)
    if (value.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres.")
    } else {
      setError("")
    }
  }

  return (
    <div className="login-card">
      <h2 className="login-title">INICIAR SESIÓN</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-field">
          <label htmlFor="userId">ID Usuario</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={e => setUserId(e.target.value.replace(/\D/g, ""))}
            required
            inputMode="numeric"
            pattern="[0-9]*"
            autoComplete="off"
          />
        </div>
        <div className="login-field">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => handlePasswordChange(e.target.value)}
            required
            minLength={8}
            maxLength={20}
          />
        </div>
        {error && (
          <div className="login-error" aria-live="polite">
            {error}
          </div>
        )}
        <button
          type="submit"
          className="login-button"
          disabled={!userId || !password}
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  )
}
