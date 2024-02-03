import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css'

//Importação das rotas
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Product from './pages/Product.jsx'
import Info from './pages/Info.jsx'
import NotFound from './pages/NotFound'
import { SearchForm } from "./components/SearchForm";
import Search from './pages/Search'

//Importação de componentes
import Navebar from './components/Navebar.jsx'
function App() {

  return (
    <div>
      <h1>React Route</h1>
      <BrowserRouter>
      {/* 2 - Links com react Router*/}
        <Navebar/>
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/product/:id" element={<Product/>}></Route>
          <Route path="/product/:id/info" element={<Info/>}></Route>
          <Route path="/search" element={<Search/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>      
    </div>
  )
}

export default App
