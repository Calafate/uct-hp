import React from "react";
import Directivos from "../components/Directivos";
import Menu from "../components/Menu";
import Footer from '../components/Footer';
import Mision from "../components/Mision";

function Institucional() {
  return (
    <div>
      <Menu />
      <Mision />
      <Directivos />
      <Footer />
    </div>
  );
}

export default Institucional;
