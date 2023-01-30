import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import endesarrollo from '../img/endesarrollo.png';

function Formacion() {
  return (
    <div>
      <Menu />
      <div className="container">
        <h2 className="mt-5">Formación</h2>
        <img src={endesarrollo} className="img-fluid" alt="En desarrollo" />
      </div>
      <Footer />
    </div>
  )
}

export default Formacion