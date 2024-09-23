import { useNavigate, useParams  } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { useEffect } from 'react'


export default function Articles() {

  
  const {id} = useParams()
  const url = "http://localhost:3000/articles/" + id

  const{data:article, isLoading, error} = useFetch(url)
  const navigate = useNavigate()
  
  useEffect(()=>{
    if(error){
      setTimeout(()=> navigate("/"), 2000)
    }
  }, [error])

  return (
    <div>
        <h1>Articles - {id}</h1>
        {isLoading && <div>isLoading...</div>}
        {error && <h4>{error}</h4>}
        {article && (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <h3>By {article.author}</h3>
            <p>{article.body}</p>
          </div>
        )}
    </div>
  )
}
