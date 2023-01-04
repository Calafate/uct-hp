import React from 'react'
import Menu from '../components/Menu'
import N020921Congreso from '../Noticias.jsx/N020921Congreso'
import N240822Firma from '../Noticias.jsx/N240822Firma'

function Diagnosticos() {
  return (
    <div>
      <Menu />
      <N240822Firma />
      
      <N020921Congreso />
      Diagnosticos
    </div>
  )
}

export default Diagnosticos