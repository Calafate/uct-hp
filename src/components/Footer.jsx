import React from 'react';
import logoUCTHP from '../img/logo-UCT-HP.png';
import logoSAMIC from '../img/logo-SAMIC.png';
import '../styles/footer.css'

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
                    <img src={logoUCTHP} alt="logo-UCT" style={{width: "190px"}} />
                    <img src={logoSAMIC} alt="logo-SAMIC" style={{width: "160px"}} />
                </div>
                {/* <p className="h3">UCT HP</p> */}
                <p>Unidad de Conocimiento Traslacional Hospitalaria Patagónica</p>
                <p>Hospital de Alta Complejidad de El Calafate SAMIC</p>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-4">
                <div className="sobre-nosotros">
                    <p className="h5">Sobre Nosotros...</p>
                    <p>La UCT-HP del Hospital SAMIC El Calafate se inserta dentro del PLAN NACIONAL DE INVESTIGACIÓN TRASLACIONAL EN SALUD PARA LA RED DE HOSPITALES cuya misión es dar prioridad y hacer frente a los nuevos desafíos científicos y de investigación dentro del ámbito hospitalario, con el fin de formar equipos de profesionales con competencias investigativas y para vincular orgánicamente el conocimiento básico, clínico e implementar todos los conocimientos en los procesos asistenciales y de políticas de salud pública.
                    </p>
                </div>
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