import React from 'react';
import '../styles/topMenu.css'

function TopMenu() {

  return (
    <div className="container-fluid p-2 topMenu" > 
      <div className="row d-flex justify-content-evenly">
        <div className="col">
          <h6>www.hospitalelcalafate.gob.ar</h6>
        </div>
        <div className="col">
          <h6>+54 2902 491831 int 4003</h6>
        </div>
        <div className="col">
          <h6>secretaria.ucthp@gmail.com</h6>
        </div>
      </div>
    </div>
  )
}

export default TopMenu