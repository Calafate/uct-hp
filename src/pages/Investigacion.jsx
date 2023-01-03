import React from 'react'
import Menu from '../components/Menu'
import noTransmisible from '../img/noTransmisible.png';
import '../styles/investigacion.css'

function Investigacion() {
  return (
    <div>
      <Menu />
      <div className="container m-5">
        <h2 className="text-center">Lineas de Investigacion</h2>
        <hr/>
        <div>
          <div className="item-inv">
            <div className="img-inv">
              <img src={noTransmisible} alt="imagen" />
            </div>
            <div>
              <h3>Enfermedades no Transmisibles</h3>
              <p>Los modelos Bioestadísticos y proyectuales aplicados a ECNT- Enfermedades Cardiovasculares: Si bien los ensayos clínicos aportan información fundamental respecto al impacto de distintos tratamientos, su traducción a la población general puede ser dificultosa. Los modelos de simulación pueden asistir en esta problemática ya que permiten realizar el vínculo entre tratamientos, población e impacto sanitario. De esta manera, la actualización de la versión local del Cardiovascular Disease Policy Model (CVDPM), un modelo establecido y ampliamente reconocido a nivel mundial, desarrollará una herramienta de salud pública que brindará información basada en evidencia a los decisores de políticas de salud.</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Investigacion