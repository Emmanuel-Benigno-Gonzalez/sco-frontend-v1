import "../../styles/usuarios/FormActuContra.css";
import React, { useState } from "react";

interface PerfilFormProps {
  token_contraseña: boolean;
  //idUsuario: string;
}
export default function ActuContraForm({ token_contraseña, /*idUsuario*/ }: PerfilFormProps) {
  const [showForm, setShowForm] = useState(false);
  const [tokenSwitch, setTokenSwitch] = useState(false);
  const [idUsuarioValue, setIdUsuarioValue] = useState("");

  function generatePassword(length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let pass = '';
    for (let i = 0; i < length; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return pass;
  }

  const [autoPassword, setAutoPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  React.useEffect(() => {
    setShowForm(!!token_contraseña);
  }, [token_contraseña]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (tokenSwitch) {
      if (newPassword !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
      }
      alert("Contraseña cambiada correctamente");
      setAutoPassword(newPassword);
      setNewPassword("");
      setConfirmPassword("");
    } else {
      alert("Contraseña generada automáticamente: " + autoPassword);
    }
  };
  if (!showForm) return null;
  return (
    <form className="perfil-form" onSubmit={handleSubmit} style={{ maxWidth: '600px', width: '100%', margin: '0 auto' }}>
      <h2 className="perfil-form-title" style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: 18 }}>Cambio de Contraseña</h2>
      <div className="perfil-form-group" style={{ marginBottom: 32 }}>
        <label htmlFor="id_usuario" className="perfil-form-label" style={{ fontSize: '1.5rem', fontWeight: 700 }}>ID de Usuario</label>
        <input
          className="perfil-form-input"
          type="number"
          id="id_usuario"
          name="id_usuario"
          value={idUsuarioValue}
          min="0"
          step="1"
          onChange={e => setIdUsuarioValue(e.target.value)}
          style={{
            fontSize: '1.5rem',
            height: '48px',
            background: '#f7fafd',
            fontWeight: 700,
            textAlign: 'center',
            borderRadius: '10px',
            border: '1px solid #dbe2ea',
            marginTop: 4,
            letterSpacing: '1px',
            boxShadow: '0 1px 4px #dbe2ea55',
            marginBottom: 0
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <div style={{ display: "flex", justifyContent: "center", width: "100%", marginBottom: "-18px" }}>
            <button
              type="button"
              className="btn-cambiar-contra"
              style={{
                background: '#1ecb8c',
                color: '#fff',
                border: 'none',
                borderRadius: '10px',
                minHeight: '45px',
                minWidth: '190px',
                fontSize: '1.5rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 1px 4px rgba(32, 226, 173, 0.10)',
                transition: 'background 0.2s, box-shadow 0.2s',
                display: 'inline-block',
                padding: 0
              }}
              onClick={() => {
                const nueva = generatePassword();
                setAutoPassword(nueva);
              }}
            >
              Cambiar contraseña
            </button>
          </div>
        </div>
      </div>
      <div className="perfil-form-group" style={{ marginTop: 0, marginBottom: 16 }}>
        <label htmlFor="auto_password" className="perfil-form-label" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 0, paddingBottom: 0 }}>Contraseña Asignada</label>
        <input
          className="perfil-form-input"
          type="text"
          id="auto_password"
          name="auto_password"
          value={autoPassword}
          readOnly
          style={{
            fontSize: '1.5rem',
            height: '48px',
            background: '#f7fafd',
            fontWeight: 700,
            textAlign: 'center',
            borderRadius: '10px',
            border: '1px solid #dbe2ea',
            marginTop: 0,
            letterSpacing: '1px',
            boxShadow: '0 1px 4px #dbe2ea55',
            marginBottom: 0
          }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16, margin: "18px 0 18px 0", justifyContent: 'center' }}>
        <span style={{ fontWeight: 600, color: tokenSwitch ? '#1ecb8c' : '#d32f2f', fontSize: "1.5rem", letterSpacing: 0.2, minWidth: 120 }}>
          Validación para mostrar contraseña
        </span>
        <button
          type="button"
          onClick={() => setTokenSwitch((prev) => !prev)}
          style={{
            width: "44px",
            height: "24px",
            borderRadius: "12px",
            border: tokenSwitch ? "2px solid #1ecb8c" : "2px solid #ccc",
            background: tokenSwitch ? "#1ecb8c" : "#f5f5f5",
            display: "flex",
            alignItems: "center",
            justifyContent: tokenSwitch ? "flex-end" : "flex-start",
            padding: "3px",
            cursor: "pointer",
            transition: "background 0.2s, border 0.2s",
            outline: tokenSwitch ? "2px solid #1ecb8c" : "none"
          }}
          aria-pressed={tokenSwitch}
          title={tokenSwitch ? "Desactivar validación" : "Activar validación"}
          id="token_contraseña"
        >
          <span
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              background: tokenSwitch ? "#fff" : "#eee",
              boxShadow: tokenSwitch ? "0 1px 6px #1ecb8c55" : "0 1px 3px #aaa2",
              transition: "background 0.2s, box-shadow 0.2s"
            }}
          />
        </button>
        <span style={{ marginLeft: 8, color: tokenSwitch ? '#1ecb8c' : '#d32f2f', fontWeight: 700, fontSize: '1.4rem', minWidth: 60 }}>
          {tokenSwitch ? 'Activado' : 'Desactivado'}
        </span>
      </div>
      <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center' }}>
        <button type="submit" className="perfil-form-submit" style={{ fontSize: '1.8rem', minHeight: '45px', minWidth: '190px', borderRadius: '10px', fontWeight: 600 }}>
          Guardar
        </button>
      </div>
    </form>
  );
}

