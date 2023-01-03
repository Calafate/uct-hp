import React from 'react';
import logoUCTHP from '../img/logo-UCT-HP.png';
import logoSAMIC from '../img/logo-SAMIC.png';

function Footer() {
  return (
    <div className="container-fluid pt-3" style={{ backgroundColor: "var(--main-color)" }}>
        <div className="row p-3">
            <div className="col-xs-12 col-md-6 col-lg-4">
                <div className="p-3 d-flex justify-content-evenly">
                    <img src={logoUCTHP} alt="logo-UCT" style={{width: "150px"}} />
                    <img src={logoSAMIC} alt="logo-SAMIC" style={{width: "150px"}} />
                </div>
                {/* <p className="h3">UCT HP</p> */}
                <p>Unidad de Conocimiento Traslacional Hospitalaria Patagónica</p>
                <p>Hospital de Alta Complejidad de El Calafate SAMIC</p>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-4">
                <p className="h5">Sobre Nosotros...</p>
                <p>Es un ámbitos que permiten reunir investigadores, decisores y financiadores para potenciar la investigación de los centros de salud y así acortar la distancia entre la producción de conocimiento y el impacto de esta en los cursos de tratamiento para los pacientes.</p>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-4">
            <p className="h5">Donde encontrarnos</p>
                
            </div>
        </div>
        <div className="row">
            <hr/>
            <p>©2023 - Todos los derechos reservados</p>
        </div>
    </div>
  )
}

export default Footer