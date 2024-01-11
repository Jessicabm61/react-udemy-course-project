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
  const [pickageCategory, setPickageCategory] = useState('')
  const [pickageWord, setPickageWord] = useState('')
  const [letters, setLetters] = useState([])

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
    setPickageCategory(category)
    setPickageWord(wordLetters)
    
    setGameStage(stage[1].name)
  }

  const verifyLetter = () => {
    setGameStage(stage[2].name)
  }

  const retry = () => {
    setGameStage(stage[0].name)
  }
  return (
    <div className="App">
      {gameStage === "start" && <StartGame startGame={startGame}/>}
      {gameStage === "game" && <Game verifyLetter={verifyLetter}/>}
      {gameStage === "end" && <End retry={retry}/>}
    </div>
  )
}

export default App
