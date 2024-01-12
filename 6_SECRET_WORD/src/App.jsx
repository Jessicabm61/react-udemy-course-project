import './App.css'
import {useState} from 'react'

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

function App() {

  {/*Estágios do jogo*/}
  const [gameStage, setGameStage] = useState(stage[0].name)

  {/*Categoria e palavra escolhida*/}
  const [pickageCategory, setPickageCategory] = useState('') //Categoria escolhida
  const [pickageWord, setPickageWord] = useState('') //Palavra gerada
  const [letters, setLetters] = useState([]) //Letras da palavra gerada convertida com Split

  const[guessLetters, setGuessLetters] = useState('') //Letras Corretas
  const[wrongLetters, setWrongLetters] = useState([]) //Letras Erradas
  const[guess, setGuess] = useState(3) //Tentativas
  const[score, setScore] = useState(0) //Pontuação

  {/*Funções que escolhem a palavra e a categoria*/}
  const pickWordCategory = () => {
    const categories = Object.keys(wordCategories)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)] 
    const wordsArray = wordCategories[category];
    const word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    
    return({category, word})
  }
 
  const startGame = () =>{

    const {word, category} = pickWordCategory()

    let wordLetters = word.split('')
    wordLetters = wordLetters.map((l) => l.toUpperCase())

    {/*fill states*/}
    setPickageCategory(category)
    setPickageWord(word)
    setLetters(wordLetters)
    
    setGameStage(stage[1].name)
  }

  const verifyLetter = (letter) => {
    const normalizeLetter = letter.toUpperCase()

    if(guessLetters.includes(letter) || wrongLetters.includes(normalizeLetter )) {
      return;
    }

    if(letters.includes(normalizeLetter)){
      setGuessLetters((prevGuessLetters) => [prevGuessLetters, normalizeLetter])
    } else {
      setWrongLetters((prevWrongLetters) => [...prevWrongLetters, normalizeLetter]);
      console.log(wrongLetters)
    }
  }

  const retry = () => {
    setGameStage(stage[0].name)
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartGame startGame={startGame}/>}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} pickageCategory={pickageCategory} pickageWord={pickageWord} guessLetters={guessLetters} wrongLetters={wrongLetters} guess={guess} score={score} letters={letters} setGuessLetters={setGuessLetters}/>}
      {gameStage === "end" && <End retry={retry}/>}
    </div>
  )
}

export default App