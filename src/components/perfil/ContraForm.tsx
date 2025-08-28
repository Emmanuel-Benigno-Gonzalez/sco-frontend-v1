import "../../styles/perfil/FormContra.css";
import React, { useState } from "react";

interface PerfilFormProps {
  token_contraseña: boolean;
  idUsuario: string;
}
export default function ContraForm({ token_contraseña }: PerfilFormProps) {
  const [showForm, setShowForm] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  React.useEffect(() => {
    setShowForm(!!token_contraseña);
  }, [token_contraseña]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    alert("Contraseña cambiada correctamente");
    setNewPassword("");
    setConfirmPassword("");
  };
  if (!showForm) {
    return (
      <div className="perfil-form-anuncio">
        <h2 className="perfil-form-anuncio-title">Acceso restringido</h2>
        <p className="perfil-form-anuncio-text">
          No tienes permiso para cambiar tu contraseña.<br />
          Contacta al administrador si necesitas acceso.
        </p>
      </div>
    );
  }
  return (
    <>
      <div className="perfil-form-anuncio">
        <h2 className="perfil-form-anuncio-title">¡Tienes autorización para cambiar tu contraseña!</h2>
        <p className="perfil-form-anuncio-text">Puedes actualizar tu contraseña de forma segura.</p>
      </div>
      <form className="perfil-form" onSubmit={handleSubmit}>
        <h2 className="perfil-form-title">Cambio de Contraseña</h2>
        <div className="perfil-form-group">
          <label htmlFor="newPassword" className="perfil-form-label">Nueva Contraseña</label>
          <input
            className="perfil-form-input"
            type={showPassword ? "text" : "password"}
            id="newPassword"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="perfil-form-group">
          <label htmlFor="confirmPassword" className="perfil-form-label">Confirmar Contraseña</label>
          <input
            className="perfil-form-input"
            type={showPassword ? "text" : "password"}
            id="confirmPassword"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '16px 0' }}>
          <button
            type="button"
            className="show-password-btn"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
          </button>
        </div>
        <div>
          <button type="submit" className="perfil-form-submit">
            Guardar
          </button>
        </div>
      </form>
    </>
  );
}
  