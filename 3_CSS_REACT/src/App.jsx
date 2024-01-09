import MyComponent from './components/MyComponents.jsx/MyComponent'
import './App.css'

function App() {
  const n =15

  return (
    
    
    <div>
      {/*Estilização index.css*/}
      <p>Esse paragrafo está no app.jsx</p>

      {/*Estilização no componente*/}
      <MyComponent/>

      {/*inline Style*/}
      <p style={{color:"violet", padding: "2px", borderTop: "2px solid red "}}>Esse paragrafo foi estilizado inline</p>
    
      {/*inline Style Dinamico*/}
      <h2 style = { n > 10 ? ({color : "purple"}) : ({color: "magenta"})}>Css Dinamico</h2>
    </div>
  )
}

export default App
