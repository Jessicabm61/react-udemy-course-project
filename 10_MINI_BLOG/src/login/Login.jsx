//Login

//page Register
import {useEffect, useState} from 'react'
import styles from './Login.module.css'

//Importação de hooks
import { useAuthentication } from '../hooks/useAuthentication'
const login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  //Chama o hook authentication recebendo o retorno desse hook
  const {login, error: authError, loading} = useAuthentication()
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    const user = {
      email,
      password,
    }

    const res = await login(user);
    console.log(res)
  }

  //Controla se o authError vai alterar seu estado, caso sim vai setar o erro padrão do sistema com authError
  useEffect(() =>
  {
    if(authError) {
      setError(authError)
    }

  },[authError])

  return (
    <div className={styles.login}>
      <h1>Entrar</h1>
      <p>Faça login para acessar o Blog</p>
      <form onSubmit = {handleSubmit}>

        <label>
          <span>E-mail:</span>
          <input
          type="e-mail"
          name="e-mail"
          required
          placeholder='Digite seu e-mail'
          onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          <span>Digite sua senha:</span>
          <input
          type="password"
          name="Password"
          required
          placeholder='Digite sua senha'
          autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        {/*Loading para não fazer vários inputs enquanto carrega o primeiro*/}
        {!loading && (<button className='btn'>Entrar</button>)}
        {loading && (<button className='btn' disabled>Aguarde...</button>)}
        {error && <p className='error'>{error}</p>}
      </form>
    
    </div>
  )
}

export default login