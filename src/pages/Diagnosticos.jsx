import React from "react";
import "../styles/diagnosticos.css";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

function Diagnosticos() {
  return (
    <div>
      <Menu />
      <div className="container">
        <h2 className="mt-5">Diagnósticos de Alta Complejidad</h2>
        <div className="gridDiagnosticos">
          <div className="gridDiagnosticosItem diagVirus">
            <div className="gridDiagnosticosItemTitulo">
              <h3>Virología</h3>
            </div>
            <ul>
              <li>HIV: diagnóstico, seguimiento y resistencia</li>
              <li>HCV: Diagnóstico, seguimiento y tipificación</li>
              <li>HBV: Diagnóstico y seguimiento</li>
              <li>Virus Neurotrópicos (HSV, EV, CMV, EBV, VZV, SARS CoV-2)</li>
              <li>SARS CoV-2 determinación y tipificación</li>
              <li>Flu A y Flu B: Diagnóstico</li>
              <li>Carga de CMV en transplantados, etc</li>
            </ul>
          </div>
          <div className="gridDiagnosticosItem diagGenetica">
            <div className="gridDiagnosticosItemTitulo">
              <h3>Genética</h3>
            </div>
            <ul>
              <li>Estudio de genes específicos por Secuenciación de Sanger</li>
              <li>Estudio de patologías por MLPA</li>
              <li>Estudio de patologías por ArrayCGH</li>
              <li>
                Estudio de patologías por Secuenciación de nueva generación:
                Paneles de Genes y Exomas
              </li>
            </ul>
          </div>
          <div className="gridDiagnosticosItem diagOncologia">
          <div className="gridDiagnosticosItemTitulo">
              <h3>Oncología</h3>
            </div>
            <ul>
              <li>Diagnóstico y tipificación de Leucemias Mieloides</li>
              <li>Diagnóstico y tipificación de Leucemias Linfoides</li>
              <li>Oncogenes y rearreglos en síndromes mieloproliferativos</li>
              <li>Tipificación de tumores sólidos por BRAFV600</li>
              <li>Tipificación de tumores sólidos por KRAS</li>
              <li>Tipificación de tumores sólidos por NRAS</li>
              <li>En implementación: Enfermedad mínima residual</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Diagnosticos;
