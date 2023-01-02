import React from "react";
import {NavLink} from "react-router-dom";
import TopMenu from '../components/TopMenu';

function Menu() {
  
  return (
    <>
      <TopMenu />
      <h2 className="m-3">Unidad de Conocimiento Traslacional Hospitalaria de la Patagonia</h2>
    <nav
      className="navbar sticky-top navbar-expand-lg navbar-light mb-3"
      style={{ backgroundColor: "var(--main-color)" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          UCT-HP
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <NavLink to = "/Home" className="nav-link">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to = "/Institucional" className="nav-link">
                Institucional
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to = "/Publicaciones" className="nav-link">
                Publicaciones
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to = "/Investigacion" className="nav-link">
                Investigación
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to = "/Diagnosticos" className="nav-link">
                Diagnósticos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to = "/Contacto" className="nav-link">
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Menu;
