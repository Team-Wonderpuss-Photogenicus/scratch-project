import React, { useState, useEffect } from 'react';
import MovieComponent from '../components/MovieComponents.jsx';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const MovieContainer = ({ movies }) => {
  if (!movies) {
    return null;
  }

  const moviesMap = movies.results?.map((movie, index) => {
    return (
      <MovieComponent
        key={movie.id + index}
        poster_path={movie.poster_path}
        title={movie.original_title}
        year={movie.release_date}
        overview={movie.overview}
        rating={Math.floor(movie.vote_average) + '/10'}
        id={movie.id}
        genres={movie.genres}
        // rent={movie.watchProviders.us.rent}
        // buy={movie.watchProviders.us.buy}
      />
    );
  });

  return <div className='movieContainer'> {moviesMap ? moviesMap : null}</div>;
};

export default MovieContainer;
