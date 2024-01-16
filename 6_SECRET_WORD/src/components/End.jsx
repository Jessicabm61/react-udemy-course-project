import React from 'react'
import "./End.css"

const End = ({retry, score, pickageWord}) => {
  return (
    <div>
        <h1>Fim de jogo</h1>
        <p>A palavra era <span>{pickageWord}</span></p>
        <p>A sua pontuação foi: <span>{score}</span></p>
        <button onClick={retry}>Resetar jogo</button>
    </div>
  )
}

export default End