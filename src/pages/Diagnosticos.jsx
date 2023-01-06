import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import N020921Congreso from '../Noticias/N020921Congreso';
import N240822Firma from '../Noticias/N240822Firma';

function Diagnosticos() {
  return (
    <div>
      <Menu />
      <h2>Virología e inmunología</h2>
      <h2>Oncología Molecular</h2>
      <h2>Genética Molecular Humana y Bioinformática</h2>
      <N240822Firma />
      <N020921Congreso />
      <Footer />
    </div>
  )
}

export default Diagnosticos