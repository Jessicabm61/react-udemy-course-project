import './App.css'
import {useEffect, useState, useCallback} from 'react'

//Importação das categorias
import wordCategories from './data/Words.js'

//Importação de componentes
import StartGame from './components/StartGame'
import Game from './components/Game'
import End from './components/End'

//Estágios do jogo
const stage = [{id:1, name: 'start'},
               {id:2, name: 'game'},
               {id:3, name: 'end'}]

const guessesQty = 4

function App() {

  {/*Estágios do jogo*/}
  const [gameStage, setGameStage] = useState(stage[0].name)

  {/*Categoria e palavra escolhida*/}
  const [pickageCategory, setPickageCategory] = useState('') //Categoria escolhida
  const [pickageWord, setPickageWord] = useState('') //Palavra gerada
  const [letters, setLetters] = useState([]) //Letras da palavra gerada convertida com Split

  const[guessLetters, setGuessLetters] = useState([]) //Letras Corretas
  const[wrongLetters, setWrongLetters] = useState([]) //Letras Erradas
  const[guess, setGuess] = useState(guessesQty) //Tentativas
  const[score, setScore] = useState(0) //Pontuação

  {/*Funções que escolhem a palavra e a categoria*/}
  const pickWordCategory = () => {
    const categories = Object.keys(wordCategories)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)] 
    const wordsArray = wordCategories[category];
    const word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    
    return({category, word})
  }
 
  const startGame = useCallback(() =>{
    
    clearLeterState()
    
    const {word, category} = pickWordCategory()

    let wordLetters = word.split('')
    wordLetters = wordLetters.map((l) => l.toUpperCase())

    {/*fill states*/}
    setPickageCategory(category)
    setPickageWord(word)
    setLetters(wordLetters)
    
    setGameStage(stage[1].name)
  },[pickWordCategory])

  const verifyLetter = (letter) => {
    const normalizeLetter = letter.toUpperCase()

    if(guessLetters.includes(normalizeLetter) || wrongLetters.includes(normalizeLetter)) {
      return;
    }

    if(letters.includes(normalizeLetter)){
      setGuessLetters((actualGuessLetters) => [...actualGuessLetters, normalizeLetter])
    } else {
      setWrongLetters((actualWrongLetters) => [...actualWrongLetters, normalizeLetter]);
    
      setGuess((actualGuess) => (actualGuess - 1))
    }
  }

  function clearLeterState(){
    setGuessLetters([])
    setWrongLetters([])
    setGuess(guessesQty)
  }

  useEffect(()=> {
    if(guess <=0) {
      clearLeterState();
      setGameStage(stage[2].name)
    }
    
  },[guess])

  useEffect(() => {
    const uniqueLetters = [... new Set (letters)]
    console.log(uniqueLetters)
    if(guessLetters.length === uniqueLetters.length) {
      console.log("passou no if")
      console.log(guessLetters.length)
      console.log(uniqueLetters.length)
      setScore((atualScore) => (atualScore += 100))
      startGame()
    }
  },[guessLetters, letters, startGame])

  const retry = () => {
    setGuess(guessesQty)
    setScore(0)
    setGameStage(stage[0].name)
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartGame startGame={startGame}/>}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} pickageCategory={pickageCategory} pickageWord={pickageWord} guessLetters={guessLetters} wrongLetters={wrongLetters} guess={guess} score={score} letters={letters} setGuessLetters={setGuessLetters}/>}
      {gameStage === "end" && <End retry={retry} score={score} pickageWord={pickageWord}/>}
    </div>
  )
}

export default App
