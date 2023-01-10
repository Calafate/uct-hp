import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import samic1 from '../img/samic1.jpg';
import '../styles/contacto.css';

function Contacto() {

  
  return (
    <div>
      <Menu />
      <div className="container">
        <div className="row g-2">
          <img src={samic1} alt="foto hospital" />
        </div>
        <div className = 'row mt-5'>
          <div className = 'col-sm-12 col-md-6 col-lg-6 col-xl-6'> 
            <iframe 
              className="mapa"
              title="map" 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5242.6351938820735!2d-72.23868217140472!3d-50.33496286725673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1668119462742!5m2!1ses-419!2sar"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className = 'col-sm-12 col-md-6 col-lg-6 col-xl-6 ps-3 text-start div-texto'>
            <h4>Unidad de Conocimiento Traslacional</h4>
            <h4>Hospitalaria Patagónica</h4>
            <hr />
            <h5>Avda. Jorge Newbery 453 - El Calafate - Santa Cruz</h5>
            <h5>+54 2902 491831 int 4003</h5>
            <h5>Consultas: secretaria.ucthp@gmail.com</h5>
            <h5>Diagnósticos moleculares: diagnostico.molecular@hospitalelcalafate.gob.ar</h5>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contacto