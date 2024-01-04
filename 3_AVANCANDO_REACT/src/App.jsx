//Import CSS
import './App.css'

//Import Imagens
import CachorroPastor from "./assets/pastor-1.jpg"
function App() {
  return (
    <div>
    {/*Imagem em Public */}
      <div>
        <img src="/cachorro.jpg" alt="Foto de um cachorro" />
      </div>

    {/*Imagem em Assets */}
      <div>
      <img src={CachorroPastor} alt="Cachorro Pastor Alemão" />    
      </div>
    </div>
  )
}

export default App
