//Importação de componentes
import ListaCarros from './components/ListaCarros'
import ListaCarrosJson from './components/ListaCarrosJson'
import ListaCondicional from './components/ListaCondicional'
import ListaKey from './components/ListaKey'
import Condicionais from './components/Condicionais'
//Import CSS
import './App.css'

//Import Imagens
import CachorroPastor from "./assets/pastor-1.jpg"
function App() {

  const meusItens = [{nome: "Jessica", idade: 28},
                     {nome: 'Pink', idade: 5}]
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

      <div>
        <ListaCarros/>
      </div>
      <div>
        <ListaCarrosJson/>
      </div>

      <div>
      <ListaCondicional itens={meusItens}/>
      </div>
      <div>
        <ListaKey/>
      </div>
      <div>
        <Condicionais/>
      </div>
    </div>
  )
}

export default App
