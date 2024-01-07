import { useState } from 'react'
//Importação de componentes
import ListaCarros from './components/ListaCarros'
import ListaCarrosJson from './components/ListaCarrosJson'
import ListaCondicional from './components/ListaCondicional'
import ListaKey from './components/ListaKey'
import Condicionais from './components/Condicionais'
import Props from './components/Props'
import CarDetails from './components/CarDetails'
//Import CSS
import './App.css'

//Import Imagens
import CachorroPastor from "./assets/pastor-1.jpg"

function App() {

  const meusItens = [{ nome: "Jessica", idade: 28 },
  { nome: 'Pink', idade: 5 }]

  const Carros = [{ marca: "FOX", modelo: 'City', ano: 1994 },
  { marca: "Fusca", modelo: 'fusquinha', ano: 2000 },
  { marca: "Uno", modelo: 'uninho', ano: 2003 }]


  const [nameUser] = useState('Jéssica')
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
        <ListaCarros />
      </div>
      <div>
        <ListaCarrosJson />
      </div>

      <div>
        <ListaCondicional itens={meusItens} />
      </div>
      <div>
        <ListaKey />
      </div>
      <div>
        <Condicionais />
      </div>
      {/*Props */}
      <div>
        <Props name={nameUser} />
      </div>

      <div></div>
      {/*Props Destructuring*/}
      <CarDetails marca='FOX' modelo='City 1.0' ano={2008} />
      <div>
        {/*Reaproveitamento de componentes*/}
        <CarDetails marca='Fusca' modelo='fusquinha' ano={1994} />
        <CarDetails marca='Uno' modelo='uninho' ano={2009} />
      </div>
      <div>
        {/*Rendereização de lista reaproveitando o componente*/}
        {Carros.map((carro, index) => (
          <CarDetails key={index} marca={carro.marca} modelo={carro.modelo} ano={carro.ano} />
        ))}
      </div>


    </div>

  )
}

export default App
