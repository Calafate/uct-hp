import React from 'react';
import img1 from '../img/historia.jpg'

const MapaImg = () => {
  return (
    <div>
        MapaImg
<div align="center"> 
    <map name="mapa1"> 
        <area alt="Pulsa para ver la página de mis amigos" shape="CIRCLE" coords="44,36,29" href="/" /> 
        <area alt="Pulsa para ver mi novia" shape="CIRCLE" coords="140,35,31" href="/" /> 
        <area alt="Pulsa para conocer a mi Familia" shape="circle" coords="239,37,30" href="/" /> 
        <area alt="Pulsa para conocer mi trabajo" shape="CIRCLE" coords="336,36,31" href="/" /> 
    </map> 
    <img src={img1} width="380" height="72" alt="Mapa de imágenes. Pulsa en cada una de los círculos." border="0" usemap="#mapa1" /> 
    <br /> 
        Pulsa en los círculos para acceder a las secciones! 
    </div>
    </div>
)}

export default MapaImg