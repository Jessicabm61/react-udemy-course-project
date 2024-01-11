import React from 'react';
import style from './MyForm.module.css';
import { useState } from 'react'
const MyForm = ({ prop }) => {

  // 3 - Gerenciamento de dados
  // 6 - Controle de inputs
  const [name, setName] = useState(prop ? prop.nome : '')
  const [email, setEmail] = useState(prop ? prop.email : '')
  const [obs, setObs] = useState('')
  const [role, setRole] = useState('')

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Enviando formulário")
    console.log(name)
    console.log(email)
    console.log(obs)
    console.log(role)
    {/* 7 - Limpar formulários após submit */ }
    setName('')
    setEmail('')
    setObs('')
  }
  // 4 - Simplificando a manipulação para a função ser in-line
  const [number, setNumber] = useState()
  return (
    <div>

      {/* 1 - Criacao de form*/}
      {/* 5 - Envio de formulário*/}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">nome: </label><br></br>
          <input type="text" name="name" placeholder='Digite seu nome' onChange={handleChange} value={name}></input>
        </div>
        {/* 2 - Label envolvendo input*/}
        <label>
          <span>e-mail: </span><br></br>
          <input type="email" name="email" placeholder='Digite seu e-mail' onChange={handleChangeEmail} value={email}></input>
        </label>
        <label>
          <span>telefone: </span><br></br>
          <input type='number' name="telefone" placeholder='Digite seu telefone' onChange={(e) => { setNumber(e.target.value) }}></input>
        </label>
        {/* 8 - Text àrea*/}
        <label><span>Obs: </span><br></br>
          <textarea type='text' name='obs' placeholder='Digite sua observação' onChange={(e) => { setObs(e.target.value) }} value={obs}></textarea>
        </label>
        <br></br>
        {/* 9 - select*/}
        <label>
          <span>Funções do sistema</span>
          <select name="role" onChange={(e) =>{setRole(e.target.value)}} value={role}>
            <option value = "user">Usuário</option>
            <option value = "editor">Editor</option>
            <option value = "admin">Administrador</option>
          </select>
        </label>



        <input type="submit" value="Enviar"></input>
      </form>
    </div>
  )
}

export default MyForm;
