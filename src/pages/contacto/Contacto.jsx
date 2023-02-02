import React from 'react';
import Menu from '../../components/common/menu/Menu';
import Footer from '../../components/common/footer/Footer';
import samic1 from '../../img/samic1.jpg';
import '../contacto/contacto.css';
import ScrollButton from '../../components/common/scrollButton/ScrollButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Contacto() {
  
  return (
    <div>
      <Menu />
      <div className="container">
        <div className="gridContacto-container mt-5">
          <div className="foto-container">
            <img className="foto-img" src={samic1} alt="foto hospital" />
          </div>
          <div className="data-container">
              <div className="data-items">
                <div className="data-items-icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="data-items-text">
                  <h6>Ubicación</h6>
                  <p>Avenida Jorge Newbery 453<br />
                  (9405) El Calafate - Santa Cruz</p>
                </div>
              </div>
              <div className="data-items">
                <div className="data-items-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="data-items-text">
                  <h6>Teléfono</h6>
                  <p>+54 2902 491831 int 4003</p>
                </div>
              </div>
              <div className="data-items">
                <div className="data-items-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="data-items-text">
                  <h6>Mails</h6>
                  <p>Consultas: <br />secretaria.ucthp@gmail.com</p>
                  <p>Diagnósticos moleculares: <br />diagnostico.molecular@hospitalelcalafate.gob.ar</p>
                </div>
              </div>
          </div>
          <div className="map-container">
            <iframe 
                className="googleMap"
                title="map" 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3028.5743101171834!2d-72.24023954985053!3d-50.334525641946755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1674824891285!5m2!1ses-419!2sar"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
              </iframe>
          </div>
        </div>
      </div>
      <ScrollButton />
      <Footer />
    </div>
  )
}

export default Contacto