import React from 'react'
import styles from './MyComponents.css/ExibeCarros.module.css'

const ExibeCarros = ({carros}) => {
 
    const ListaMap = carros.map((carro)=>(
        <li key={carro.id}> id: {carro.id} nome: {carro.nome} ano: {carro.ano}</li>
    ))

    return (
    <div>
        <ul className = {styles.lista_carros}>{ListaMap}</ul>    
    </div>
  )
}

export default ExibeCarros