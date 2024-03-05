//page Register
import {useEffect, useState} from 'react'
import styles from './Register.module.css'

//Importação de hooks
import { useAuthentication } from '../hooks/useAuthentication'
const Register = () => {

  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassWord, setConfirmPassWord] = useState("")
  const [error, setError] = useState("")

  //Chama o hook authentication recebendo o retorno desse hook
  const {auth, createUser, error: authError, loading} = useAuthentication()
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    const user = {
      displayName,
      email,
      password,
    }

    if(password != confirmPassWord) {
      setError("As senhas não coincidem, digite novamente a senha")
      return;
    }

    const res = await createUser(user);
  }

  //Controla se o authError vai alterar seu estado, caso sim vai setar o erro padrão do sistema com authError
  useEffect(() =>
  {
    if(authError) {
      setError(authError)
    }

  },[authError])
  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe sua história</p>
      <form onSubmit = {handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
          type="text"
          name="name"
          required
          autoComplete="username"
          placeholder="Digite seu nome"
          onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>

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
        
        <label>
          <span>Digite sua senha:</span>
          <input
          type="password"
          name="confirmPassword"
          required
          placeholder='Confirme sua senha'
          onChange={(e) => setConfirmPassWord(e.target.value)}
          />
        </label>
        {/*Loading para não fazer vários inputs enquanto carrega o primeiro*/}
        {!loading && (<button className='btn'>Registrar</button>)}
        {loading && (<button className='btn' disabled>Aguarde...</button>)}
        {error && <p className='error'>{error}</p>}
      </form>
    
    </div>
  )
}

export default Register