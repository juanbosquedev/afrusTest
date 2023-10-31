import { useState } from "react";
import "./MovieApp.css";
export const MovieApp = () => {
  const [data, setData] = useState([]);

  const [movie, setMovie] = useState("");

  const urlBase = "https://api.themoviedb.org/3/search/movie?query=";
  const API_KEY = "&api_key=f69b554c57586a45f93ffd4a217dfe38";

  const fetchMovie = async () => {
    try {
      const response = await fetch(`${urlBase}${movie}${API_KEY}`);
      const result = await response.json();
      setData(result.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setMovie(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    fetchMovie();
  };

  return (
    <div className="container">
      <h1 className="title">MovieApp</h1>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="pelicula"
          value={movie}
          onChange={handleChange}
        />
        <button type="submit" className="search-button">
          BUSCAR
        </button>
      </form>

      <div className="movie-list">
        {data?.map((mov) => {
          return (
            <div key={mov.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`}
                alt={mov.title}
              />
              <h2 className="movie-card-title">{mov.title}</h2>
              <p>{mov.overview}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
