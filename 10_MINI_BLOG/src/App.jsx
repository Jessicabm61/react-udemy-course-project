import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css'

//Importação de páginas
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Login from './login/Login.jsx'
import Register from './register/Register.jsx'

//Importação de componentes
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
