import { Link } from "react-router-dom"
import {useFetch} from "../hooks/useFetch"
import "./Home.css"



export default function Home() {

  const {data:articles, isLoading, error} =useFetch("http://localhost:3000/articles")


  return (
    <div className="home">
      <h2>Home Page</h2>
      {isLoading && <div>isLoading...</div>}
      {error && <div>{error}</div>}
      {articles && articles.map((article) => (

        <div key={article.id} className="card">
          <h1>{article.title}</h1>
          <h3>{article.author}</h3>
          <Link to={`/Articles/${article.id}`}>Read More...</Link>
        </div>
      ))}

    </div>
  )
}
