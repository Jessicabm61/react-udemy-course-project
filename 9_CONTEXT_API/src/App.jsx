
import './App.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

//Importação de componentes
import Navbar from './components/Navbar'

//improtação pages
import Home from './pages/Home.jsx'
import Sobre from './pages/Sobre.jsx'
import Contato from './pages/Contato.jsx'

function App() {


  return (
    <div>
     <h1>Context API</h1>
     <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/sobre' element={<Sobre/>}></Route>
        <Route path='/contato' element={<Contato/>}></Route>
      </Routes>
     </BrowserRouter>
     

    </div>
  )
}

export default App
