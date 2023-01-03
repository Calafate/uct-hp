import React from 'react'

function TopMenu() {
const divh6 = {
  fontSize: "12px"
}
const divbgColor={
  backgroundColor: "#E0E0E0"
}

  return (
    <div className="container-fluid p-2" style={divbgColor}> 
      <div className="row d-flex justify-content-evenly">
        <div className="col">
          <h6 style={divh6}>www.hospitalelcalafate.gob.ar</h6>
        </div>
        <div className="col">
          <h6 style={divh6}>+54 2902 491831 int 2244</h6>
        </div>
        <div className="col">
          <h6 style={divh6}>secretaria.ucthp@gmail.com</h6>
        </div>
      </div>
    </div>
  )
}

export default TopMenu