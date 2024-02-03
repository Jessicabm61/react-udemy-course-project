import React from 'react'
import { useParams } from 'react-router-dom'
const Info = () => {
    const {id} = useParams()
  return (
    <div>
        <p>Informações do produto {id}</p>
    </div>
  )
}

export default Info