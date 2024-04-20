import React, { useState, useEffect } from 'react';
import MovieComponent from '../components/MovieComponents.jsx';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const MovieContainer = ({ movies }) => {
  if (!movies) {
    return null;
  }

  console.log('movie id: ', movies.results.id);


// const castMap = movies.results.credits.cast((cast, index) => (
//   <li key={index}>{cast.name}</li>
// ));

// const castList = <ul>{castMap}</ul>;


  const moviesMap = movies.results?.map((movie, index) => {
    return (
      <MovieComponent
        key={movie.id + index}
        poster_path={movie.poster_path}
        title={movie.original_title}
        year={movie.release_date}
        overview={movie.overview}
        rating={Math.floor(movie.vote_average)+ '/10'}
        id={movie.id}
        genres={movie.genres}
        // cast={castList} --> not sure about this one
        // rent={movie.watchProviders.us.rent}
        // buy={movie.watchProviders.us.buy}
      />
    );
  });

  return <div className='movieContainer'> {moviesMap ? moviesMap : null}</div>;
};

export default MovieContainer;

