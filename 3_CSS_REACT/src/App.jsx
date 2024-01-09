import MyComponent from './components/MyComponents.jsx/MyComponent'
import './App.css'
import Title from './components/MyComponents.jsx/Title'

function App() {
  const n =15

  const redTitle = true
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

      {/*Css classe dinâmica*/}
      <p className={redTitle ? "red-title" : "title"}>Esse CSS foi dinâmico</p>

      {/*Css module*/}
      <Title/>
    </div>
  )
}

export default App
