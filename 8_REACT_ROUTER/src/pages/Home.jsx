import {useFetch} from '../hooks/useFetch.jsx'
import {Link} from 'react-router-dom'
import './Home.css'
const Home = () => {

  const url = "http://localhost:3000/products"
  const {data: items, loading, error} = useFetch(url)

  return (
    <div>
      <h1>Lista de produtos</h1>
      {error && <p>{error}</p>}
      {loading && <p>Carregando produtos...</p>}
      <ul className='products'>
       {items && items.map((item) => (
        <li key = {item.id}>
          <h2>{item.name}</h2>
          <p> R$ {item.price}</p>
          <Link to={`/product/${item.id}`}>Detalhe</Link>
        </li>
       )) 
       }
      </ul>
    </div>
  )
}

export default Home