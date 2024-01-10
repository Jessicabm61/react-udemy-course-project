import ExibeCarros from './components/ExibeCarros'
import './App.css'

function App() {

  const carros = [{id:1, nome:"Fox", ano:2008},
                  {id:2, nome:"Fusca", ano:2005},
                  {id:3, nome:"Limozine", ano:2004}]

  return (
    <div>
      <h1>Exibição de carros</h1>

     <ExibeCarros carros ={carros}/>
    </div>
  )
}

export default App
