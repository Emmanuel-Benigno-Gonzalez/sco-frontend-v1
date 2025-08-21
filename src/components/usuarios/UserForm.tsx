
import React, { useState } from "react";
import "../../styles/usuarios/FormUser.css";

export default function UserForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <form className="form-registro">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="id_usuario">ID Usuario</label>
            <input
              type="number"
              id="id_usuario"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              maxLength={40}
              required
               style={{ textTransform: 'uppercase' }}
              onInput={e => e.currentTarget.value = e.currentTarget.value.toUpperCase()}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ap_paterno">Apellido Paterno</label>
            <input
              type="text"
              id="ap_paterno"
              maxLength={40}
              required
              style={{ textTransform: 'uppercase' }}
              onInput={e => e.currentTarget.value = e.currentTarget.value.toUpperCase()}
            />
          </div>
        </div>
        <div className="form-row" style={{ display: "flex", gap: "16px" }}>
          <div className="form-group" style={{ flex: 1 }}>
            <label htmlFor="ap_materno">Apellido Materno</label>
            <input
              type="text"
              id="ap_materno"
              maxLength={40}
              required
              style={{ textTransform: 'uppercase' }}
              onInput={e => e.currentTarget.value = e.currentTarget.value.toUpperCase()}
            />
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label htmlFor="password">Contraseña</label>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ position: "relative", width: "100%" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  maxLength={255}
                  required
                  style={{ paddingRight: "44px", width: "100%" }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  style={{
                    position: "absolute",
                    right: "8px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "1.5rem",
                    color: "#1976d2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  tabIndex={-1}
                  aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.06 10.06 0 0 1 12 19c-5 0-9.27-3.11-10.44-7.5a9.77 9.77 0 0 1 2.22-3.61"/><path d="M1 1l22 22"/><path d="M9.53 9.53A3.5 3.5 0 0 0 12 15.5c1.93 0 3.5-1.57 3.5-3.5a3.5 3.5 0 0 0-5.97-2.47"/></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3.5"/></svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label htmlFor="tipo_usuario">Tipo de Usuario</label>
            <select id="tipo_usuario" required>
              <option value="">Seleccione...</option>
              <option value="1">Administrador</option>
              <option value="2">Capturador</option>
              <option value="3">Coordinador</option>
            </select>
          </div>
        </div>
        <div className="form-actions">
          <button type="reset" className="btn-secundario">Limpiar</button>
          <button type="submit" className="btn-primario">Guardar</button>
        </div>
      </form>
    </div>
  );
}