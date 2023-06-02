import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Shimmer from "./Shimmer";
import { API_OF_MOVIE } from "./constant";
import { Link } from "react-router-dom";
const Body = () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getMovieList();
  }, []);
  async function getMovieList() {
    const data = await fetch(API_OF_MOVIE);
    const json = await data.json();
    setMovieList(json);
  }
  if (movieList.length === 0) {
    return <Shimmer/>
  }
  return (
    <div className="movie-container">
      {movieList.map((movie) => (
        <Link to={"/movie/"+movie.show.id} key={movie.show.id}><MovieCard data={movie}  /></Link>
      ))}
    </div>
  );
};

export default Body;
