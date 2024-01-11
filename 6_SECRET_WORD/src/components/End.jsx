import React from 'react'

const End = ({retry}) => {
  return (
    <div>
        <h1>End</h1>
        <p>Fim de jogo</p>
        <button onClick={retry}>Resetar jogo</button>
    </div>
  )
}

export default End