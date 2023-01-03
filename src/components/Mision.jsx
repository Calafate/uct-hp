import React from "react";
import "../styles/mision.css";


function Mision() {
  return (
    <div className="m-5">
      <div className="row">
        <div className="col-md-12 col-lg-3">
          <div className="accordion accordion-flush" id="accordion1">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <h5>Misión</h5>
                </button> <hr className="hr"/>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordion1"
              >
                <div className="accordion-body">
                  Desarrollar un área hospitalaria especializada en
                  investigación traslacional y diagnóstico en virología e
                  inmunología, oncología molecular, genética molecular humana y
                  salud pública. Promover la capacitación de recursos humanos en
                  investigación traslacional y dichas áreas de investigación
                  científica con el fin de contribuir a la salud pública de la
                  comunidad, la provincia y la región.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-3">
          <div className="accordion accordion-flush" id="accordion2">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <h5>Visión</h5>
                </button> <hr className="hr"/>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordion2"
              >
                <div className="accordion-body">
                  Constituir un centro de alta complejidad con un enfoque local,
                  provincial y regional con nuevos enfoques en investigación
                  traslacional para garantizar la calidad en la asistencia de
                  salud de los pacientes y la comunidad.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <div className="accordion accordion-flush" id="accordion3">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <h5>Objetivos</h5>
                </button> <hr className="hr"/>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionID"
              >
                <div className="accordion-body">
                  <p>
                    Promover la investigación traslacional generando líneas de
                    investigación que deriven en el desarrollo de nuevos
                    conocimientos que sean rápidamente implementados en la
                    comunidad.
                  </p>
                  <p>
                    Implementar tecnologías de última generación en
                    investigación y diagnóstico.
                  </p>
                  <p>
                    Promover el desarrollo de equipos interdisciplinarios en el
                    Hospital para diagnóstico, tratamiento y prevención de
                    patologías específicas e investigación. Para lograr una
                    atención de excelencia a los pacientes.
                  </p>
                  <p>
                    Complejizar el laboratorio especializado en diagnóstico
                    molecular a través de la generación del servicio de
                    Diagnóstico Molecular en la Unidad de conocimiento
                    traslacional Hospitalaria Patagónica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mision;
