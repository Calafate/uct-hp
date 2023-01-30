import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import '../styles/links.css'

function Links() {
  return (
    <div>
      <Menu />
      <div className="container">
        <h2 className="mt-5">Links de interés</h2>
        <hr />
        <div className="listado">
          <ul className="list-group text-start">
            <li className="list-group-item">
              <a href="https://www.boletinoficial.gob.ar/detalleAviso/primera/254034/20211207"
                target="_blank" rel="noreferrer">
                Boletin Oficial - Creación Unidad de Conocimiento Traslacional
                Hospitalaria Patagónica</a></li>
            <li className="list-group-item">
              <a href="https://www.hospitalelcalafate.gob.ar/web/" 
              target="_blank" rel="noreferrer">Hospital de Alta Complejidad de El Calafate SAMIC</a>
            </li>
            <li className="list-group-item">
              <a href="https://www.ibyme.org.ar/" 
              target="_blank" rel="noreferrer">Fundación IBYME</a>
            </li>
            <li className="list-group-item">
              <a href="https://www.argentina.gob.ar/ciencia" 
              target="_blank" rel="noreferrer">Ministerio de Ciencia, Tecnología e Innovación</a>
            </li>
            <li className="list-group-item">
              <a href="https://rits.conicet.gov.ar/" 
              target="_blank" rel="noreferrer">Red de Investigación Traslacional en Salud (RITS)</a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Links;
