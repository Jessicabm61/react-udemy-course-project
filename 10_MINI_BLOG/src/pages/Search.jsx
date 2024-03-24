import React from 'react'
import { useSearch } from '../hooks/useSearch'
import { useFechDocuments } from '../hooks/useFetchDocuments'
import { Link } from 'react-router-dom'
import PostDetail from '../components/PostDetail'
import styles from './Search.module.css'
const Search = () => {

    const query = useSearch()
    const search = query.get("q")

    const { documents : post, loading } = useFechDocuments('posts', search);
    console.log(post)
    return (
        <div className={styles.search_container}>
            {post && post.map((post) => (
            <PostDetail key={post.id} post={post}/>
            ))}
            
            {post && post.length === 0 && 
            (   <div>
                    <p>Não foram encontrados nenhum posts com o resultado da busca</p>
                    <Link to="/posts/create" className='btn btn-dark'>Criar primeiro post</Link>
                </div>
            )}
        </div>
    )
}

export default Search