import React from 'react'
import Menu from '../components/Menu';
import samic1 from '../img/samic1.jpg'

function Contacto() {
  const divStyle = {
    width:"600px",
    height:"300px",
    border: "none",
  };
  return (
    <div>
      <Menu />
      <div className="container">
        <div className="row">
          <img src={samic1} alt="hospital" />
        </div>
        <div className = 'row mt-5'>
          <div className = 'col-md-12 col-lg-6'> 
            <iframe 
              transition={{duration:2}} animate={{y:[-200, 50, 0]}}
              style={divStyle} title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5242.6351938820735!2d-72.23868217140472!3d-50.33496286725673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1668119462742!5m2!1ses-419!2sar"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className = 'col-md-12 col-lg-6 text-start'>
            <h4>Unidad de Conocimiento Traslacional Hospitalaria Patagónica</h4>
            <h5>Avda. Jorge Newbery 453 - El Calafate - Santa Cruz</h5>
            <h5>+54 2902 491831 int 2244</h5>
            <h5>Consultas: secretaria.ucthp@gmail.com</h5>
            <h5>Diagnosticos moleculares: diagnostico.molecular@hospitalelcalafate.gob.ar</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto