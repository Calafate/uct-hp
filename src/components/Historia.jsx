import React from 'react';
import historia from '../img/historia.jpg'

const Historia = () => {
  return (
    <div classname="container mt-5">
        <h2>Nuestra Historia</h2>
        <div className="row">
          <img src={historia} className="fluid-img" alt="historia" />
        </div>
    </div>
  )
}

export default Historia