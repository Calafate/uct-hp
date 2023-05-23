import React from 'react';
/* import corro from "../../img/corro.png";
import bruque from "../../img/bruque.png";
import salgado from "../../img/salgado.png";
import pelorosso from "../../img/pelorosso.png";
import almeida from "../../img/almeida.png"; */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faViruses, faDna, faHeartPulse, faPeopleArrows, faFlaskVial } from '@fortawesome/free-solid-svg-icons';
import '../../components/investiga/lineasInvestigacion.css';

const LineasInvestigacion = () => {
  return (
    <div className="container">
        <h2 className="text-center mt-5">Líneas de Investigación</h2>
        <hr/>
        <div >
          <div className="item-inv">
            <div className="text-inv text-start">
              <FontAwesomeIcon icon={faHeartPulse} size="4x" color="var(--main-color)" pull="left" fixedWidth/>
              <h4>Enfermedades no Transmisibles</h4>
              <p>Los modelos Bioestadísticos y proyectuales aplicados a ECNT- Enfermedades Cardiovasculares: Si bien los ensayos clínicos aportan información fundamental respecto al impacto de distintos tratamientos, su traducción a la población general puede ser dificultosa. Los modelos de simulación pueden asistir en esta problemática ya que permiten realizar el vínculo entre tratamientos, población e impacto sanitario. De esta manera, la actualización de la versión local del Cardiovascular Disease Policy Model (CVDPM), un modelo establecido y ampliamente reconocido a nivel mundial, desarrollará una herramienta de salud pública que brindará información basada en evidencia a los decisores de políticas de salud.</p>
            </div>
            <div className="container-investigadores">
              <a data-bs-toggle="collapse" href="#cvSalgado">
                <p className="text-nombre" >Dra. Maria Victoria Salgado</p>
              </a>
              {/*  <div className="container-imgInv">
                  <img className="img-inv" src={salgado} alt="foto" />
                </div> */}
            </div>
            <div className="collapse" id="cvSalgado">
                <iframe src="assets/files/cv/cvSalgado.pdf#toolbar=0"
                type="application/pdf"
                title="cvSalgado"
                width="80%"
                height="400px"/>
            </div>
          </div>
          <div className="item-inv">
            <div className="text-inv text-start">
              <FontAwesomeIcon icon={faPeopleArrows} size="4x" color="var(--main-color)" pull="left" fixedWidth/>
              <h4>Epidemiología Social</h4>
              <p>La propuesta es trascender categorías analíticas estructurantes (tiempo-persona-lugar) e incorporar al análisis nuevas categorías (historia- sujetx individual/colectivo-territorio ecosocial) que den cuenta de las (sobre) determinaciones socio-culturales e imposiciones que impactan sobre la experiencia de vida de las poblaciones. Deconstruir el objeto de la epidemiología (concepción causalista del riesgo) para abordarlo y modelizarlo desde la transdisciplina y la complejidad de sus múltiples niveles de organización y de análisis. Transformar la información epidemiológica clásica en insumo para nuevas preguntas de investigación-acción que aporten a la construcción de conocimientos trasladables a prácticas del cuidado y modelos de atención más justos y equitativos. Abordar críticamente los modos de vida y la reproducción social de la salud.</p>
            </div>
            <div className="container-investigadores">
              <a data-bs-toggle="collapse" href="#cvAlmeida">
                <p className="text-nombre" >Dra. Virna Almeida</p>
              </a>
            </div>
            {/* <div className="collapse" id="cvAlmeida">
                <iframe src="assets/files/cv/cvAlmeida.pdf#toolbar=0"
                type="application/pdf"
                title="cvAlmeida"
                width="80%"
                height="400px"/>
            </div> */}
          </div>
          <div className="item-inv">
            <div className="text-inv text-start">
              <FontAwesomeIcon icon={faDna} size="4x" color="var(--main-color)" pull="left" fixedWidth/>
              <h4>Genética Molecular Humana</h4>
              <p>El desarrollo de investigación en el área de la genética humana cumple un rol fundamental. Las nuevas tecnologías y desarrollos científicos vienen acompañados de la implementación en el diagnóstico molecular. Esto se evidencia claramente al observar la gran cantidad de síndromes o patologías encontradas en el estudio de nuevos genes candidatos que explican total o parcialmente las componentes genéticas en los fenotipos de los pacientes. Esta forma de pensar la interacción entre el diagnóstico y la investigación está estrechamente relacionada con la medicina traslacional. De esta forma el desarrollo obtenido a partir de los proyectos de investigación pueden ser rápidamente puestos a disposición de los pacientes y la comunidad. Esto permite acortar los tiempos para mejorar el diagnóstico y así, la calidad de vida de las personas.</p>
            </div>
            <div className="container-investigadores">
              <a data-bs-toggle="collapse" href="#cvBruque">
                <p className="text-nombre" >Dr. David Bruque</p>
              </a>
            </div>
            {/* <div className="collapse" id="cvBruque">
                <iframe src="assets/files/cv/cvBruque.pdf#toolbar=0"
                type="application/pdf"
                title="cvBruque"
                width="80%"
                height="400px"/>
            </div> */}
          </div>
          <div className="item-inv">
            <div className="text-inv text-start">
              <FontAwesomeIcon icon={faFlaskVial} size="4x" color="var(--main-color)" pull="left" fixedWidth/>
              <h4>Patología y oncología molecular</h4>
              <p>Santa Cruz y Chubut tienen una mortalidad por cáncer en hombres de las más altas del país (1er y 2ndo lugar – 2016 INC) (aproximadamente 150/100000 hab). Tierra del fuego y Santa Cruz son 2da y 3ra respectivamente en mortalidad anual en mujeres (aproximadamente 90 /100000 hab – 2016 INC). En este sentido resulta relevante iniciar un proyecto de investigación vinculado a la problemática de los tumores avanzados más frecuentes. Para ello se plantea el estudio de mutaciones en genes relacionados con cáncer de pulmón y colon, tales como ALK, EGFR, ROS1, BRAF y NRAS-KRAS. En forma adicional, se estudiará la posible vinculación de dichas alteraciones genéticas con el microambiente inflamatorio tumoral, específicamente el subtipo de macrofagos asociados a tumor. Asimismo, se realizarán estudios de variantes genéticas por paneles genómicos en cáncer de mama: BRCA1/2, TP53, ATM, NBN, RAD51C, MLH1, MSH2, MSH6, PMS2, EPCAM, PTEN, CDH1, CHEK2, PALB2, CDK4/6. Aquellas variantes noveles encontradas en los pacientes como así algunas de interés poblacional serán analizadas en estudios funcionales en líneas celulares e in silico.</p>
            </div>
            <div className="container-investigadores">
              <a data-bs-toggle="collapse" href="#cvPelorosso">
                <p className="text-nombre" >Dr. Facundo Pelorosso</p>
              </a>
            </div>
            <div className="collapse" id="cvPelorosso">
                <iframe src="assets/files/cv/cvPelorosso.pdf#toolbar=0"
                type="application/pdf"
                title="cvPelorosso"
                width="80%"
                height="400px"/>
            </div>
          </div>
          <div className="item-inv">
            <div className="text-inv text-start">
              <FontAwesomeIcon icon={faViruses} size="4x" color="var(--main-color)" pull="left" fixedWidth/>
              <h4>Virología e Inmunología Molecular</h4>
              <p>El proyecto inicial del Laboratorio de Virología e Inmunología Molecular se basa en el estudio filogenético y la caracterización epidemiológica molecular de VIH de la población que convive con el virus en la región. La información que brindan los resultados de dichos estudios es directamente aplicable para el desarrollo de políticas sanitarias y de prevención, direccionándolas hacia poblaciones susceptibles y modos de trasmisión. Es sumamente importante, advertir que la provincia, y el departamento de Lago Argentino en particular, cuenta con una población sumamente heterogénea y migrante, motivo por el cual, los estudios epidemiológicos son extremadamente complicados y las políticas de prevención de enfermedades transmisibles suelen ser poco efectivas. Las conclusiones de los estudios moleculares de esta índole, complementarán las estadísticas estratificando a la población y definiendo las tasas reales de transmisión intra región y la tasa de importación de cepas, así como también se podrán predecir resistencias y progresión de los pacientes asociadas con distintos subtipos y formas recombinantes en circulación (CRFs).</p>
            </div>
            <div className="container-investigadores">
              <a data-bs-toggle="collapse" href="#cvCorro">
                <p className="text-nombre" >Dr. Guillermo Corró</p>
              </a>
            </div>
            {/* <div className="collapse" id="cvCorro">
                <iframe src="assets/files/cv/cvCorro.pdf#toolbar=0"
                type="application/pdf"
                title="cvCorro"
                width="80%"
                height="400px"/>
            </div> */}
          </div>
        </div>
    </div>
  )
}

export default LineasInvestigacion