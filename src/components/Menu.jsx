import React from "react";
import {NavLink} from "react-router-dom";
import TopMenu from '../components/TopMenu';
import logoUCT from '../img/logo-UCT-HP-menu.png';
import logoSAMIC from '../img/logo.png';

function Menu() {
  
  return (
    <>
      <TopMenu />
      <h2 className="m-3">Unidad de Conocimiento Traslacional Hospitalaria Patagónica</h2>
    <nav
      className="navbar sticky-top navbar-expand-lg navbar-light mb-3"
      style={{ backgroundColor: "var(--main-color)" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logoUCT} alt="logo-UCT" style={{width: "120px", marginRight: "10px"}}/>
          <img src={logoSAMIC} alt="logo-SAMIC" style={{width: "35px"}}/>
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
            <li className="nav-item fs-5">
              <NavLink to = "/Home" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item fs-5">
              <NavLink to = "/Institucional" className="nav-link">
                Institucional
              </NavLink>
            </li>
            <li className="nav-item fs-5">
              <NavLink to = "/Noticias" className="nav-link">
                Noticias
              </NavLink>
            </li>
            <li className="nav-item fs-5">
              <NavLink to = "/Investigacion" className="nav-link">
                Investigación
              </NavLink>
            </li>
            <li className="nav-item fs-5">
              <NavLink to = "/Diagnosticos" className="nav-link">
                Diagnósticos
              </NavLink>
            </li>
            <li className="nav-item fs-5">
              <NavLink to = "/Links" className="nav-link">
                Links de Interés
              </NavLink>
            </li>
            <li className="nav-item fs-5">
              <NavLink to = "/Formacion" className="nav-link">
                Formación
              </NavLink>
            </li>
            <li className="nav-item fs-5">
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
