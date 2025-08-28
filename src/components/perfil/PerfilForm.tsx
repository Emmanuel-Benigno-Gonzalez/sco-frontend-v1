import React, { useState } from "react";
import "../../styles/perfil/FormPerfil.css";

export default function PerfilForm() {
  const [perfil, setPerfil] = useState({
    idUsuario: "",
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    correo: "",
    telefono: "",
    rol: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const upperCaseFields = ["nombre", "apellidoPaterno", "apellidoMaterno"];
    setPerfil({
      ...perfil,
      [name]: upperCaseFields.includes(name) ? value.toUpperCase() : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Perfil actualizado:\n" + JSON.stringify(perfil, null, 2));
  };

  return (
    <div className="perfil-card-container">
      <form className="perfil-card" onSubmit={handleSubmit}>
        <div className="perfil-avatar-section perfil-avatar-section-bonito">
          <div className="perfil-avatar-wrapper">
            <img
              src={`https://ui-avatars.com/api/?name=${perfil.nombre || "Nombre"}+${perfil.apellidoPaterno || "Apellido"}&background=3498db&color=fff&rounded=true&size=140`}
              alt="Avatar"
              className="perfil-avatar"
            />
          </div>
          <h2 className="perfil-nombre">
            {perfil.nombre || "Nombre"} {perfil.apellidoPaterno || "Apellido"} {perfil.apellidoMaterno}
          </h2>
        </div>
        <div className="perfil-info-section">
          <div className="perfil-info-group">
            <label>ID Usuario</label>
            <input
              type="number"
              name="idUsuario"
              value={perfil.idUsuario}
              disabled
              style={{ background: "#f7fafc" }}
            />
          </div>
          <div className="perfil-info-group">
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={perfil.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="perfil-apellidos-row perfil-info-group-flex">
            <div className="perfil-info-group">
              <label>Apellido Paterno</label>
              <input
                type="text"
                name="apellidoPaterno"
                value={perfil.apellidoPaterno}
                onChange={handleChange}
                required
              />
            </div>
            <div className="perfil-info-group">
              <label>Apellido Materno</label>
              <input
                type="text"
                name="apellidoMaterno"
                value={perfil.apellidoMaterno}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="perfil-info-group">
            <label>Correo</label>
            <input
              type="email"
              name="correo"
              value={perfil.correo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="perfil-info-group">
            <label>Teléfono</label>
            <input
              type="tel"
              name="telefono"
              value={perfil.telefono}
              onChange={handleChange}
            />
          </div>
          <div className="perfil-info-group">
            <label>Rol</label>
            <input
              type="text"
              name="rol"
              value={
                perfil.rol === "admin"
                  ? "Administrador"
                  : perfil.rol === "usuario"
                  ? "Usuario"
                  : ""
              }
              readOnly
              disabled
              style={{ background: "#f7fafc" }}
            />
          </div>
        </div>
        <button type="submit" className="perfil-btn-actualizar">Actualizar</button>
      </form>
    </div>
  );
}