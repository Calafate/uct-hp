import React from 'react';
import Menu from '../../components/common/menu/Menu';
import Footer from '../../components/common/footer/Footer';
import endesarrollo from '../../img/endesarrollo.png';
import ScrollButton from '../../components/common/scrollButton/ScrollButton';

function Formacion() {
  return (
    <div>
      <Menu />
      <div className="container">
        <h2 className="mt-5">Formación</h2>
        <img src={endesarrollo} className="img-fluid" alt="En desarrollo" />
      </div>
      <ScrollButton />
      <Footer />
    </div>
  )
}

export default Formacion