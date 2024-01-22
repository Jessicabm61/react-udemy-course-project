import {useState, useEffect} from 'react'

function App() {

  const [products, setProducts] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const url = 'http://localhost:3000/products'
  
  
  //1 - Resgatando dados na tela
  useEffect(() => {

    const fetchData = async () => {
      
      try {
        const res = await fetch(url)
        const data = await res.json()
        setProducts(data)
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
      
    }
    
    fetchData()
  }, [products]) //Se deixar [] vaxio ele executa o useEffect apenas uma vez quando o componente é montado
  //Da forma que está vai renderizar sempre quando alterar o estado de products

  //2- Post na API através de "POST"
  const handleSubmit = async (e) => {
    e.preventDefault()
    const product = {
      name,
      price,
    }

    const res = await fetch(url, {
      method: "POST",
      header: {'content-type': 'application/json'},
      body: JSON.stringify(product)
    })
    
  }

  return (
    <div>
     <h1>Lista de produtos</h1>
     <ul>
     {products.map((produto) => (
      <li key= {produto.id}>produto: {produto.name} preço: {produto.price}</li>
      )
      )}
     </ul>
     
     <form onSubmit={handleSubmit} className="add-product">
      <label>
        <span>name: </span>
        <input type="text" name="name" onChange={(e) => {setName(e.target.value)}} placeholder='Digite o nome do produto'></input>
      </label>
      <label>
        <span>preço: </span>
        <input type="number" name="price" onChange={(e) => {setPrice(e.target.value)}} placeholder='Digite o preço'></input>
      </label>
      <button type="submit">Enviar</button>
     </form>
    </div>
  )
}

export default App
