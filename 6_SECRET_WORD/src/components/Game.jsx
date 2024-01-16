import React from 'react'
import "./Game.css"
import { useState, useRef } from 'react'

const Game = ({ verifyLetter,
  pickageCategory,
  pickageWord,
  guessLetters,
  setGuessLetters,
  wrongLetters,
  guess,
  score,
  letters }) => {

  const [letter, setLetter] = useState('')
  const letterUseRef = useRef(null)


  const handleLetter = (e) => {
    e.preventDefault()
    //Envia a variável letter para o componente APP
    verifyLetter(letter)
    //Seta para null novamente
    setLetter('')
    //Foca o cursor no input
    letterUseRef.current.focus()
  }
  return (
    <div className="game">
      <div className="points">
        <span>Pontuação {score}</span>
      </div>
      <p>Advinhe a palavra: </p>
      <h3 className="tip">
        Dica sobre a palavra: <span> {pickageCategory}</span>
        <p>Você ainda tem {guess} tentativas</p>
      </h3>
      <div className="wordContainer">
        {letters.map((letter, indice) => (
          guessLetters.includes(letter) ? (
            <span className="letter" key={indice}>{letter}</span>
          ) : (
            <span className="blankSquare" key={indice}></span>)
        ))}
      </div>
      <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra:</p>
        <form onSubmit={handleLetter}>
          <input type="text" name="letter" maxLength="1" required onChange={(e) => setLetter(e.target.value)} value={letter} ref={letterUseRef}></input>
          <button>jogar!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
            {wrongLetters.map((letter, index) => (
              <span key={index}>{letter}, </span>
            ))}
      </div>
    </div>
  )
}

export default Game