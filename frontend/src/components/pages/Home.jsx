import { useState } from "react";
import MovieCard from "../MovieCard";
import "../../css/Home.css"

function Home() {
  const movies = [
    {
      title: "Интерстеллар",
      release_date: "2014",
      url: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      id: 1
    },
    {
      title: "Крестный отец",
      release_date: "1972",
      url: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      id: 2
    },
    {
      title: "Темный рыцарь",
      release_date: "2008",
      url: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      id: 3
    },
    {
      title: "Побег из Шоушенка",
      release_date: "1994",
      url: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      id: 4
    },
    {
      title: "Форрест Гамп",
      release_date: "1994",
      url: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      id: 5
    },
  ];

  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    return alert(searchQuery)
  }

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form px-">
        <input value={searchQuery} type="text" placeholder="search movie" className="search-input" onChange={(e) => {
          return setSearchQuery(e.target.value)
        }} />
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="movies-grid">
        {movies.map(movie => (
          movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  )
}

export default Home