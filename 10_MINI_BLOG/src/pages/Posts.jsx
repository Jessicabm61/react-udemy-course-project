import { useParams } from 'react-router-dom' 
import { useFetchDocument } from '../hooks/useFetchDocument'
import styles from './Posts.module.css'


const Posts = () => {
  
    const { id } = useParams()
    const { document : post, loading} = useFetchDocument('posts', id)
    console.log(post)
    return (
        <div className={styles.post_container}>
      {loading && <p>Loading...</p>}
      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <p className={styles.post_body}>{post.body}</p>
          <h3>Este post trata sobre:</h3>
          <div className={styles.tags}>
            {post.tag.map((tag) => (
              <p key={tag}>
                <span>#</span>
                {tag}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
    
  )
}

export default Posts