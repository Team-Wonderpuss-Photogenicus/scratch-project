import React, { useState, useEffect } from "react";
import MovieComponent from "../components/MovieComponents.jsx";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const MovieContainer = ({ movies }) => {
  if (!movies) {
    return null;
  }

  console.log('movies: ', movies)

  const moviesMap = movies?.map((movie, index) => {
    return (
      <MovieComponent
        key={movie.title + index}
        poster={movie.poster_path}
        title={movie.title}
        year={movie.year}
        overview={movie.overview}
        genres={movie.genres[0].name}
        directors={movie.directors[0]}
        cast={movie.cast}
        streamingInfo={movie.streamingInfo}
      />
    );
  });

  return <div className="movieContainer"> {moviesMap ? moviesMap : null}</div>;
};

export default MovieContainer;

// function genreList (movie) {
//     const genreMap = movies.genres.map((item, index) => {
//         <Genre key={index} text={item} />;
//     });

//     return { Genre };
// };

// function Genre (props) {
//     return <div>{props.text}</div>;
// };
