import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Investigadores from '../components/Investigadores';
import LineasInvestigacion from '../components/LineasInvestigacion';
import ScrollButton from '../components/ScrollButton';

function Investigacion() {

  return (
    <div>
      <Menu />
      <Investigadores />
      <LineasInvestigacion />
      <ScrollButton />
      <Footer />
    </div>
  )
}

export default Investigacion