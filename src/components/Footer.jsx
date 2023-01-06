import React from 'react';
import logoUCTHP from '../img/logo-UCT-HP.png';
import logoSAMIC from '../img/logo-SAMIC.png';

function Footer() {

    const divStyle = {
        width:"300px",
        height:"200px",
        border: "none",
      };

  return (
    <div className="container-fluid pt-3 mt-5" style={{ backgroundColor: "var(--main-color)" }}>
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
                <iframe  style={divStyle} title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2546.722042794192!2d-72.23884183020012!3d-50.33443680409125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1672924951555!5m2!1ses-419!2sar" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
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