import React from "react";

const MovieCard = (props) => {
  return (
    <div className="card">
      <img
        src={props.data.show.image.original}
        alt=""
      />
      <div className="movieDetails">
        <h3>{props.data.show.name}</h3>
        <p>{props.data.show.averageRuntime} min</p>
      </div>
    </div>
  );
};

export default MovieCard;
