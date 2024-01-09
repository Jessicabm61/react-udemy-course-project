import React from 'react'

const Counter = ({onIncrement}) => {
  return (
    <div>
        <button onClick = {onIncrement}>Incrementar</button>
    </div>
  )
}

export default Counter