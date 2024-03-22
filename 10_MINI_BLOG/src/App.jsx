import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import './App.css'

//Importação de páginas
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Login from './login/Login.jsx'
import Register from './register/Register.jsx'
import CreatePost from './pages/CreatePost'
import DashBoard from './pages/DashBoard'

//Importação de componentes
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

//Importação de contexto
import {AuthProvider} from  './context/AuthContext.jsx'

//Importação autenticação firebase responsável por mapear se a autenticação do usuário foi feita com sucesso
import { onAuthStateChanged } from 'firebase/auth'

//Importação de hooks
import { useAuthentication } from './hooks/useAuthentication'

function App() {
  
  //Cria um estado de usuário setando como indefinido
  const [user, setUser] = useState(undefined)

  // Recebe a autenticação criada dentro do hook
  const {auth} = useAuthentication()

  //Atribui ao estado de loading do usuário o valor do usuário comparado com undefined, se for undefined significa que está carregando
  const loadingUser = user === undefined

  //Controla quando a autenticação mudar
  //Utiliza a função do firebase onAuthStateChanged para mapear se a autenticação foi feita com sucesso
  //Passa como argumento a auth do hook useAuthentication
  //Quando recebe um usuário "user" ele seta o estado user com esse usuário recebido
  //onAuthStateChanged recebe dois argumentos, o primeiro a autenticação que será controlada
  //E o segundo a função que será executada sempre quando a autenticação mudar
  //O objeto user é retornado implicitamente pelo Firebase quando a função onAuthStateChanged é chamada
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  },[auth])

  //Enquanto o usuário for undefined vai ser apresentado "carregando"
  if (loadingUser) {
    return <p>Carregando...</p>
  }

  console.log("Usuário: ", user)

  return (
  <div className="App">
    {/*AuthProvider é um componente que provê um contexto
    para toda a aplicação. Ele recebe um valor como propriedade chamada value,
    que é o valor que será disponibilizado através do contexto para todos os
     componentes filhos que consomem esse contexto.*/}
    <AuthProvider value = {{ user }}>
      <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={ !user ? <Login /> : <Navigate to="/" />} />
          <Route path='/register' element={ !user ? <Register /> : <Navigate to="/" />} />
          <Route path='/posts/create' element={ user ? <CreatePost /> : <Navigate to="/login" />} /> 
          <Route path='/dashboard' element={ user ? <DashBoard /> : <Navigate to="/login" />} />        
        </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </AuthProvider>
    </div>
  )
}

export default App; // Exportando o componente App como o padrão