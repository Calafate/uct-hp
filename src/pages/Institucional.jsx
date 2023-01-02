import React from 'react'
import Menu from '../components/Menu'
import samic1 from '../img/samic1.jpg'

function Institucional() {
  return (
    <div>
      <Menu />
      Institucional
      <div>
        <img src={samic1} alt="hospital" />
      </div>
    </div>
  )
}

export default Institucional