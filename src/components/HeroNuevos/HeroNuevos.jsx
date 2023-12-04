import React from 'react'
import './heroNuevos.css'
import nuevosServicios from '../../../infoNuevosServicios/nuevosServicios'

function HeroNuevos() {

  return (
    <div className='container-nuevos'>{nuevosServicios.map((item, index)=>(
      <div key={index} className="container-info-nuevo">
        <h2>{item.title}</h2>
        <h4>¿Para que me puede servir? 🤔</h4>
        {item.description.map((description, index)=>(
          <ul key={index}>
            <li>{description}</li>
          </ul>
        ))}
      </div>
    ))}</div>
  )
}

export default HeroNuevos