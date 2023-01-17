import React from "react";
import Menu from "../components/Menu";
import Footer from '../components/Footer';
import Mision from "../components/Mision";
import Historia from "../components/Historia";
import ScrollButton from "../components/ScrollButton";

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
