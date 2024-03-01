import React from 'react'
import { useTitleContext } from '../hooks/useTitleContext'

const Sobre = () => {

  const {color, dispatch} = useTitleContext()

  // 6 - alterando contexto complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };
  
  return (
    <div>
    <div>
      <p style={{color: color}}>Sobre</p>
    </div>
    <div>
      <button onClick={() => setTitleColor("RED")}>Vermelho</button>
      <button onClick={() => setTitleColor("BLUE")}>AZUL</button>
    </div>
    </div>
    
  )
}

export default Sobre