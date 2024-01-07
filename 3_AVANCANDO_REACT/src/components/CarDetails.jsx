import React from 'react'

const CarDetails = ({marca, modelo, ano}) => {
  return (
    <div>
        <ul>
            <li>Marca: {marca}</li>
            <li>Modelo: {modelo}</li>
            <li>Ano: {ano}</li>
        </ul>
    </div>
  )
}

export default CarDetails