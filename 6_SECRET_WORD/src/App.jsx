import './App.css'
import {useState} from 'react'
//import {WordList} from './data/Words.js'


//Importação de componentes
import StartGame from './components/StartGame'
import Game from './components/Game'
import End from './components/End'

//Estágios do jogo
const stage = [{id:1, name: 'start'},
               {id:2, name: 'game'},
               {id:3, name: 'end'}]

function App() {

  const [gameStage, setGameStage] = useState(stage[0].name)

  const startGame = () =>{
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
