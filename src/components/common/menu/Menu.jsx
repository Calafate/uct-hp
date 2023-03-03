import React from "react";
import {NavLink} from "react-router-dom";
import logoUCT from '../../../img/logo-UCT-HP-menu.png';
import '../../common/menu/menu.css'

function Menu() {

  return (
    <>
    <nav className="navbar sticky-top navbar-expand-lg "
      style={{ backgroundColor: "var(--main-color)" }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logoUCT} className="d-inline-block align-text-top" alt="logo-UCT" style={{width: "100px", marginRight: "10px"}}/>
          UCT HP
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to = "/Home" activeclassname="active" className="nav-link">
                <p>Home</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to = "/Institucional" activeclassname="active" className="nav-link">
                <p>Institucional</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to = "/Noticias" activeclassname="active" className="nav-link">
                <p>Noticias</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to = "/Investigacion" activeclassname="active" className="nav-link">
                <p>Investigación</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to = "/Diagnosticos" activeclassname="active" className="nav-link">
                <p>Diagnósticos</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to = "/Links" activeclassname="active" className="nav-link">
                <p>Links de Interés</p>
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink to = "/Formacion" activeclassname="active" className="nav-link">
                Formación
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink to = "/Contacto" activeclassname="active" className="nav-link">
                <p>Contacto</p>
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
