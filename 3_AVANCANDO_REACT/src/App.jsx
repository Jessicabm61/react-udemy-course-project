import { useState } from 'react'
//Importação de componentes
import ListaCarros from './components/ListaCarros'
import ListaCarrosJson from './components/ListaCarrosJson'
import ListaCondicional from './components/ListaCondicional'
import ListaKey from './components/ListaKey'
import Condicionais from './components/Condicionais'
import Props from './components/Props'
import CarDetails from './components/CarDetails'
import Fragments from './components/Fragments'
import Children from './components/Children'
import PassaFuncaoComoPropriedade from './components/PassaFuncaoComoPropriedade'
import Counter from './components/Counter'
import Display from './components/Display'
import UserDetails from './components/UserDetails'
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

  const Pessoas = [
    { id: 2, nome: "Bob", idade: 25, profissao: "Designer" },
    { id: 1, nome: "Alice", idade: 30, profissao: "Engenheira" },
    { id: 3, nome: "Carol", idade: 35, profissao: "Professor" },
    { id: 4, nome: "David", idade: 28, profissao: "Programador" }
  ];
  

  function ImprimirConsole() {
    console.log('Imprime isso')
  }

  let [count, setCount] = useState(0)

  function handleIncrement() {
    setCount((prev) => {
      return prev + 1;
    }
    )
  }

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

      <div>
        {/*Fragments*/}
        <Fragments /></div>


      <div>
        {/*Children*/}
        <Children>
          <h1>Esse é o título do container</h1>
        </Children>
      </div>
      <div>
        {/*função com prop*/}
        <PassaFuncaoComoPropriedade funcao={ImprimirConsole} />
      </div>
      <div>
        {/*State Lift*/}
        <Counter onIncrement={handleIncrement} />
        <Display count={count} />
      </div>
      <div>
      {/**Desafio avançando react*/}  
      {Pessoas.map((pessoa) =>(
        <UserDetails key = {pessoa.id} id = {pessoa.id} nome = {pessoa.nome} idade = {pessoa.idade} profissao = {pessoa.profissao}/>
      ))}
      </div>

    </div>

  )
}

export default App
