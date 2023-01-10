import React from "react";
import '../styles/carousel.css';
import carousel1 from '../img/carousel/carousel1.jpg'
import carousel2 from '../img/carousel/carousel2.jpg'
import carousel3 from '../img/carousel/carousel3.jpg'

function Carousel() {
  return (
    <div className="container mb-5">
      <div id="carouselUCT" className="carousel carousel-dark slide " data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselUCT"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselUCT"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselUCT"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousel1} className="d-block w-100" alt="imagen" />
            <div className="carousel-caption d-none d-md-block">
              <h3>Formamos equipos profesionales con competencias investigativas vinculando el conocimiento básico, clínico con la implementación de políticas de salud pública</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousel2} className="d-block w-100" alt="imagen" />
            <div className="carousel-caption d-none d-md-block">
              <h3>Nuestro objetivo es mejorar procesos de atención de la salud con especial atención a la formación e impulso de la producción de conocimientos en salud.</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousel3} className="d-block w-100" alt="imagen" />
            <div className="carousel-caption d-none d-md-block">
              <h3>Desarrollamos investigación científica dentro del ámbito hospitalario</h3>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselUCT" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselUCT" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
