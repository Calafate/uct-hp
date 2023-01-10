import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import endesarrollo from "../img/endesarrollo.png";
import '../styles/links.css'

function Links() {
  return (
    <div>
      <Menu />
      <div className="container">
        <h2>Links de interés</h2>
        <hr />
        <div className="listado">
          <ul class="list-group text-start">
            <li class="list-group-item">
              <a href="https://www.boletinoficial.gob.ar/detalleAviso/primera/254034/20211207"
                target="_blank" rel="noreferrer">
                Boletin Oficial - Creación Unidad de Conocimiento Traslacional
                Hospitalaria Patagónica</a></li>
            <li class="list-group-item">
              <a href="https://www.hospitalelcalafate.gob.ar/web/" 
              target="_blank" rel="noreferrer">Hospital de Alta Complejidad de El Calafate SAMIC</a>
            </li>
            <li class="list-group-item">
              <a href="https://www.ibyme.org.ar/" 
              target="_blank" rel="noreferrer">Fundación IBYME</a>
            </li>
            {/* <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li> */}
          </ul>
        </div>
        <img src={endesarrollo} className="img-fluid" alt="En desarrollo" />
      </div>
      <Footer />
    </div>
  );
}

export default Links;
