import React from 'react';
import corro from '../img/homero.png';
import bruque from '../img/milhouse.png';
import salgado from '../img/marge.png';
import pelorosso from '../img/tony.png';
import almeida from '../img/selma.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import '../styles/investigadores.css'

const Investigadores = () => {

  return (
    <div className="container mb-5">
        <h2>Investigadores responsables</h2>
        <hr />
        <div className="row mb-5 justify-content-evenly">
            <div className="col-sm-6 col-md-4 col-lg-2">
              <div className="card mx-auto card-wrap">
                <div className="card-img-wrap">
                  <img className="card-img-top" src={bruque} alt="foto" />
                </div>
                <div className="card-body">
                  <h6 className="card-title">Bruque Carlos David</h6>
                  <p className="card-text"></p>
                </div>
                <div className="card-icon pb-1">
                    <a data-bs-toggle="collapse" href="#cvBruque" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                      <FontAwesomeIcon icon={faFileLines} size="2x" color="#4DD0E1" />
                    </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
              <div className="card mx-auto card-wrap">
                <div className="card-img-wrap">
                  <img className="card-img-top" src={corro} alt="foto" />
                </div>
                <div className="card-body">
                  <h6 className="card-title">Corró Guillermo</h6>
                  <p className="card-text"></p>
                </div>
                <div className="card-icon pb-1">
                    <a data-bs-toggle="collapse" href="#cvCorro" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                      <FontAwesomeIcon icon={faFileLines} size="2x" color="#4DD0E1" />
                    </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
              <div className="card mx-auto card-wrap">
                <div className="card-img-wrap">
                  <img className="card-img-top" src={salgado} alt="foto"/>
                </div>
                <div className="card-body">
                  <h6 className="card-title"> Salgado Maria Victoria</h6>
                  <p className="card-text"></p>
                </div>
                <div className="card-icon pb-1">
                    <a data-bs-toggle="collapse" href="#cvSalgado" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                      <FontAwesomeIcon icon={faFileLines} size="2x" color="#4DD0E1" />
                    </a>
                  </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
              <div className="card mx-auto card-wrap">
                <div className="card-img-wrap">
                  <img className="card-img-top" src={pelorosso} alt="foto" />
                </div>
                <div className="card-body">
                  <h6 className="card-title"> Pelorosso Facundo</h6>
                  <p className="card-text"></p>
                </div>
                <div className="card-icon pb-1">
                    <a data-bs-toggle="collapse" href="#cvPelorosso" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                      <FontAwesomeIcon icon={faFileLines} size="2x" color="#4DD0E1" />
                    </a>
                  </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
              <div className="card mx-auto card-wrap">
                <div className="card-img-wrap">
                  <img className="card-img-top" src={almeida} alt="foto" />
                </div>
                <div className="card-body">
                  <h6 className="card-title">Almeida Virna</h6>
                  <p className="card-text"></p>
                </div>
                <div className="card-icon pb-1">
                    <a data-bs-toggle="collapse" href="#cvAlmeida" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                      <FontAwesomeIcon icon={faFileLines} size="2x" color="#4DD0E1" />
                    </a>
                  </div>
              </div>
            </div>
        </div>
          <div>
            <div className="collapse" id="cvBruque">
                <div className="card card-body">
                  <iframe src="assets/files/cv/1.pdf#toolbar=0" type="application/pdf" title="cvBruque" width="100%" height="600px" />
                </div>
            </div>
            <div className="collapse" id="cvCorro">
                <div className="card card-body">
                  <iframe src="assets/files/cv/2.pdf#toolbar=0" type="application/pdf" title="cvCorro"  width="100%" height="600px" />
                </div>
            </div>
            <div className="collapse" id="cvSalgado">
                <div className="card card-body">
                  <iframe src="assets/files/cv/3.pdf#toolbar=0" type="application/pdf" title="cvSalgado" width="100%" height="600px" />
                </div>
            </div>
            <div className="collapse" id="cvPelorosso">
                <div className="card card-body">
                  <iframe src="assets/files/cv/4.pdf#toolbar=0" type="application/pdf" title="cvPelorosso" width="100%" height="600px" />
                </div>
            </div>
            <div className="collapse" id="cvAlmeida">
                <div className="card card-body">
                  <iframe src="assets/files/cv/5.pdf#toolbar=0" type="application/pdf" title="cvAlmeida" width="100%" height="600px" />
                </div>
            </div>
          </div>
    </div>
  )
}

export default Investigadores