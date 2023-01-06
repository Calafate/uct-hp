import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import endesarrollo from '../img/endesarrollo.png';

function Formacion() {
  return (
    <div>
      <Menu />
      <div className="container">
        <img src={endesarrollo} className="img-fluid" alt="En desarrollo" />
      </div>
      <Footer />
    </div>
  )
}

export default Formacion