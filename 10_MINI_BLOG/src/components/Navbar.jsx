//Navbar.jsx
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

//Importação do contexto e valor do contexto
import { useAuthValue } from "../context/AuthContext";

//Importação hooks
import { useAuthentication } from "../hooks/useAuthentication";

const Navbar = () => {

  //Pegar o usuário do contexto 
  const { user } = useAuthValue()

  //Pegar a função de logout
  const {logout} = useAuthentication()
  
  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.brand} to="/">
        Mini <span>Blog</span>
      </NavLink>

      { user && (
        <>
        <ul className={styles.links_list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Home
            </NavLink>
          </li>
        
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Sobre
            </NavLink>
          </li>

          <li>
            <NavLink
            to="/dashboard"
            className={({isActive}) => (isActive ? styles.active : "")}
            >
              Dashboard
            </NavLink>
          </li>
          
          <li>
            <NavLink
            to="/createpost"
            className={({isActive}) => (isActive ? styles.active : "")}
            >
              Novo Post
            </NavLink>
          </li>
          <button onClick={logout} >Sair</button>
         </ul>
        </>
      )}

        {!user && (
          <>
            <ul className={styles.links_list}>
              
              <li>
              <NavLink
              to="/"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
              Home
              </NavLink>
              </li>
        
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Sobre
                </NavLink>
              </li>

              <li>
                <NavLink
                to='/login'
                className={({isActive}) => (isActive ? styles.active : "")}
                >
                  Login
                </NavLink>
              </li>

              <li>
                <NavLink
                to='/register'
                className={({isActive}) => (isActive ? styles.active : "")}
                >
                  Registrar
                </NavLink>
              </li>
            </ul>
          </>    
        )}
        </nav>
  );
};

export default Navbar;