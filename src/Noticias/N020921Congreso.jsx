import React from 'react'
import foto1 from '../img/noticias/020921.jpg';

function N020921Congreso() {
  return (
    <div className="container text-start">
      <h2>La UCT participó en el Congreso Europeo de Genética Humana</h2>
      <hr />
      <div className="d-flex flex-column">
        <img src={foto1} alt="imagen" className="img-fluid m-4"/>
        <p>El equipo de la UCTHP – Unidad de Conocimiento Traslacional Hospitalaria Patagónica – presentó trabajos en el Congreso Europeo de Genética Humana relacionados a temas de diagnóstico e investigación en enfermedades cardiacas genéticas relacionadas a muerte súbita e Hipoacusias genéticas. <br/>
        El equipo de la UCTHP – con sede en el Hospital SAMIC El Calafate e integrado por el Dr. Guillermo Corró, Tec. Mónica Paola Bellazzi y Dr. Carlos David Bruque- lleva adelante el proyecto relacionado con enfermedades genéticas relacionadas a muerte súbita.<br/>
        Además, colabora activamente con el laboratorio de referencia de hipoacusias hereditarias a cargo de la Dra. Viviana Dalamón del Laboratorio de Fisiología y Genética de la Audición liderado por la Dra. Ana Belén Elgoyhen en el INGEBI-CONICET.<br/>
        El Dr. Bruque, director de la UCTHP, consideró que “estos trabajos están enmarcados dentro del contexto de la generación de conocimiento y de líneas en investigación traslacionales y diagnóstico molecular que no se realizaban hasta el momento en la región”.<br/>
        Asimismo, agregó que “esta fue una oportunidad para mostrar a la comunidad científica internacional los trabajos realizados, las investigaciones llevadas adelante y los primeros pasos para la realización de diagnóstico genético molecular humana en Patagonia”.</p>
      </div>
    </div>
  )
}

export default N020921Congreso