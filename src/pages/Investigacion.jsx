import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Investigadores from '../components/Investigadores';
import LineasInvestigacion from '../components/LineasInvestigacion';

function Investigacion() {

  return (
    <div>
      <Menu />
      <Investigadores />
      <LineasInvestigacion />
      <Footer />
    </div>
  )
}

export default Investigacion