import "../styles/NavBar.css";
import { useState } from "react";

export default function NavBar({ obtenerPersonaje, url, nombre, setNombre }) {
  const handleChange = (e) => {
    setNombre(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let endpoint = url + nombre + "&page=1&order_by=favorites&sort=desc";
    obtenerPersonaje(endpoint);
  };

  return (
    <div className="navbar-conteiner">
      <div className="search-conteiner">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="search-textfield"
            placeholder="search"
            name="personaje"
            onChange={handleChange}
            value={nombre}
          />
        </form>
      </div>
    </div>
  );
}
