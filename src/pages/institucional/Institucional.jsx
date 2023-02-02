import React from "react";
import Menu from "../../components/common/menu/Menu";
import Footer from '../../components/common/footer/Footer';
import Mision from "../../components/institucional/Mision";
import Historia from "../../components/institucional/Historia";
import ScrollButton from "../../components/common/scrollButton/ScrollButton";

function Institucional() {
  return (
    <div>
      <Menu />
      <Mision />
      <Historia />
      <ScrollButton />
      <Footer />
    </div>
  );
}

export default Institucional;
