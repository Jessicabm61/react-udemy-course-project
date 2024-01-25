import {useState, useEffect} from 'react'
import { useFetch } from './hooks/useFetch'

function App() {

  const [products, setProducts] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const url = 'http://localhost:3000/products'
  
  
  //1 - Resgatando dados na tela
 // useEffect(() => {

 //   const fetchData = async () => {
      
   //   try {
     //   const res = await fetch(url)
       // const data = await res.json()
       // setProducts(data)
      //} catch (error) {
        //console.error('Erro ao buscar dados:', error);
     // }
    //}
    
  //  fetchData()
  //}, [products]) //Se deixar [] vaxio ele executa o useEffect apenas uma vez quando o componente é montado
  //Da forma que está vai renderizar sempre quando alterar o estado de products

  // 4 Custom hook
  const {data : itens, httpConfig, loading} = useFetch(url)

  //2- Post na API através de "POST"
 const handleSubmit = async (e) => {
    e.preventDefault()
    const product = {
      name,
      price,
    }

    //const res = await fetch(url, {
    //  method: "POST",
     // headers: {'content-type': 'application/json'},
      //body: JSON.stringify(product)
    //})

    // 3 - Carregamento dinâmico
   // const addProduct = await res.json()
   // setProducts((prevProducts) => [...prevProducts, addProduct])
 
  // 5 - Refatorando hook
  httpConfig(product, "POST")
  
  setName("")
  setPrice("")

  }

  return (
    <div>
     <h1>Lista de produtos</h1>
      {loading && <p>Carregando os produtos....</p>}
      {!loading && 
      <ul>
      {itens && itens.map((produto) => (
       <li key= {produto.id}>produto: {produto.name} preço: {produto.price}</li>
       )
       )}
      </ul>}
     
     
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
