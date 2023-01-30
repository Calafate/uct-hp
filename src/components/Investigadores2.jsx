import React, { useState } from 'react';

import { investigadores } from '../data/info'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import '../styles/investigadores.css'

const Investigadores = () => {
  const [investigators, setInvestigators] = useState(investigadores)

  return (
    <div className="container mb-5">
        <h2>Investigadores responsables</h2>
        <hr />
        <div className="row mb-5 justify-content-evenly">
          {investigators.map(investigator => {
            return(
              <div key={investigator.id} className="col-sm-6 col-md-4 col-lg-2">
                    <div className="card mx-auto card-wrap">
                      <div className="card-img-wrap">
                        <img className="card-img-top" src={investigator.foto} alt="foto" />
                      </div>
                      <div className="card-body">
                        <h6 className="card-title">{investigator.nombre}</h6>
                        <p className="card-text"></p>
                      </div>
                      <div className="card-icon pb-1">
                        <a data-bs-toggle="collapse" href='#cv' role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                          <FontAwesomeIcon icon={faFileLines} size="2x" color="var(--main-color)" />
                        </a>
                      </div>
                    </div>
              </div>
          )})}
        </div>   
    </div>
  )
}

//  <div className="collapse" id="cv">
//      <div className="card card-body">
//           <iframe src={`assets/files/cv/${investigator.id}.pdf#toolbar=0`} type="application/pdf" title="cv" width="100%" height="600px" />
//      </div>
//   </div>

export default Investigadores