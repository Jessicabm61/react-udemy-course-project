// 2 - Links com react Router
import { Link, NavLink} from 'react-router-dom';
import './Navebar.css'

const Navebar = () => {
  return (
    <nav>
    {/* 
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    */}
    <NavLink to="/">Home</NavLink> {/* Nav link cria uma className chamada active que pode ser editada no css, ela vai estilizar o link quando clicar nele, marcando o link ativo*/}
    <NavLink to="/about">Sobre</NavLink>
  </nav>
)}

export default Navebar