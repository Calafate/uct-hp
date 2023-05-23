import React from 'react';
import Menu from '../../components/common/menu/Menu';
import Footer from '../../components/common/footer/Footer';
/* import Investigadores from '../../components/investiga/Investigadores'; */
import LineasInvestigacion from '../../components/investiga/LineasInvestigacion';
import ScrollButton from '../../components/common/scrollButton/ScrollButton';

function Investigacion() {

  return (
    <div>
      <Menu />
      {/* <Investigadores /> */}
      <LineasInvestigacion />
      <ScrollButton />
      <Footer />
    </div>
  )
}

export default Investigacion