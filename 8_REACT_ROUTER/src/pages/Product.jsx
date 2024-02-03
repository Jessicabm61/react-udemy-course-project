import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import {Link} from 'react-router-dom'

import './Product.css'
const Product = () => {
    const {id} = useParams()
    const url = "http://localhost:3000/products/" + id
    const {data: item, loading, error} = useFetch(url)

  return (
    <div>
        {error && <p>{error}</p>}
        {loading && <p>Carregando dados...</p>}
        {item && (
          <div className='product'>
            <h2>{item.name}</h2>
            <p>Preço R$ {item.price}</p>
            {/*Nested routes*/}
            <Link to={`/product/${item.id}/info`}>Informações</Link>
          </div>
        )}
    </div>
  )
}

export default Product