import styles from './CreatePost.module.css'
import{ useState } from 'react'

//Importação dos hooks
import { useInsertDocument } from "../hooks/useInsertDocument"

//Importação do provider do contexto
import { useAuthValue } from "../context/AuthContext";
const CreatePost = () => {
  
  const [title, setTitle] = useState()
  const [image,setImage] = useState()
  const [body,setBody] = useState()
  const [tags, setTags] = useState()
  const [formError, setFormError] = useState()

  //Desistruturação da função do hook useInsertDocument
  const {insertDocument, response} = useInsertDocument("posts")

  //Importação valor do contexto
  const { user } = useAuthValue()

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormError("")

    //Validar image URL

    //Criar array de tags

    //Checar todos os valores
    insertDocument({
      title,
      image,
      body,
      tags,
      uid: user.uid,
      createdBy: user.displayName
    })

    //Redirect to home page
  }
  
  return (
    <div className={styles.CreatePost}>

    <h1>Criar Post</h1>
    <p>Escreva sobre o que quiser e compartilhe seu conhecimento!</p>
    
    <form onSubmit = {handleSubmit}>
  
    <label>
      <span>Título</span>
      <input
      type="text"
      name="título"
      required
      placeholder='Digite um título'
      onChange={(e) => setTitle(e.target.value)}
      />
    </label>

    <label>
      <span>URL da Imagem</span>
      <input
      type="url"
      name="imagem"
      required
      placeholder='Insira o URL da imagem'
      onChange={(e) => setImage(e.target.value)}
      />
    </label>
    
    <label>
      <span>Conteúdo do POST</span>
      <input
      type="textarea"
      name="conteúdo"
      required
      placeholder='Insira o conteúdo do post'
      onChange={(e) => setBody(e.target.value)}
      />
    </label>

    <label>
      <span>Tags</span>
      <input
      type="text"
      name="tags"
      required
      placeholder='Insira as tags do post'
      onChange={(e) => setTags(e.target.value)}
      />
    </label>
    
    {!response.loading && (<button className='btn'>Enviar</button>)}
    {response.loading && (<button className="btn" disabled>Aguarde...</button>)}
    {response.error || formError && (<p className='error'>{response.error || formError}</p>)}
    </form>
    </div>
  )
}

export default CreatePost