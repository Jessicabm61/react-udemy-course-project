import React from 'react'

const UserDetails = ({id, nome, idade, profissao}) => {
  return (
    <div>
        <ul>
            <li>
                id: {id} nome: {nome} idade: {idade} profissao: {profissao}
            </li>
        </ul>
    </div>
  )
}

export default UserDetails