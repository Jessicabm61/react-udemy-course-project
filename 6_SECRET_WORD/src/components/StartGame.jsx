import React from 'react'
import './StartGame.css'
const StartGame = ({startGame}) => {
  return (
    <div className = 'Start'>
        <h1>Secret World</h1>
        <p>Clique no botão abaixo para jogar</p>
        <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default StartGame