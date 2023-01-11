import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/objetivos.css'
import { faMicroscope, faBookMedical, faVialVirus } from '@fortawesome/free-solid-svg-icons';

const Objetivos = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row g-5 justify-content-evenly objetivos-wrap">
        <div className="col-xs-12 col-md-6 col-lg-4">
          <div className="objetivo">
            <div className="objetivo-img mx-auto my-auto">
            <FontAwesomeIcon icon={faMicroscope} size="4x" color="#4DD0E1" />
            </div>
            <div className="objetivo-text">
              <h4 className="pt-5 mt-2">Investigación</h4>
              <p>Producir conocimiento científico para dar respuestas a las necesidades de la comunidad, la provincia y la región desde un concepto de la federalización del conocimiento y de la salud.</p>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-4">
          <div className="objetivo">
            <div className="objetivo-img mx-auto my-auto">
              <FontAwesomeIcon icon={faVialVirus} size="4x" color="#4DD0E1" />
            </div>
            <div className="objetivo-text">
              <h4 className="pt-5 mt-2">Diagnósticos</h4>
              <p>Desarrollar calidad en salud a través de la generación de conocimiento georreferenciado y la construcción de un polo en salud pública.</p>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-4">
          <div className="objetivo">
            <div className="objetivo-img mx-auto my-auto">
              <FontAwesomeIcon icon={faBookMedical} size="4x" color="#4DD0E1" />
            </div>
            <div className="objetivo-text">
              <h4 className="pt-5 mt-2">Formación</h4>
              <p>Capacitación continua de nuevos profesionales y actualización acorde a los avances científicos atentos a comunidades concretas.</p>
            </div>
          </div>
        </div>
        </div>

    </div>

  )
}

export default Objetivos