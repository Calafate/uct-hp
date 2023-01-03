import React from "react";
import "../styles/mision.css";


function Mision() {
  return (
    <div class="container m-5">
      <div class="row">
        <div class="col-md-12 col-lg-3">
          <div class="accordion accordion-flush" id="accordion1">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <h5>Misión</h5>
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordion1"
              >
                <div class="accordion-body">
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
        <div class="col-md-12 col-lg-3">
          <div class="accordion accordion-flush" id="accordion2">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <h5>Visión</h5>
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordion2"
              >
                <div class="accordion-body">
                  Constituir un centro de alta complejidad con un enfoque local,
                  provincial y regional con nuevos enfoques en investigación
                  traslacional para garantizar la calidad en la asistencia de
                  salud de los pacientes y la comunidad.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-lg-6">
          <div class="accordion accordion-flush" id="accordion3">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <h5>Objetivos</h5>
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionID"
              >
                <div class="accordion-body">
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
