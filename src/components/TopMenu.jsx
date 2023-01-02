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
          <h6 style={divh6}>redes sociales</h6>
        </div>
        <div className="col">
          <h6 style={divh6}>(02902) 491-831 int. 40015</h6>
        </div>
        <div className="col">
          <h6 style={divh6}>mail@dominio.com</h6>
        </div>
      </div>
    </div>
  )
}

export default TopMenu