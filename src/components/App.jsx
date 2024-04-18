import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import MovieContainer from '../containers/MovieContainer.jsx';
import Question from './Question.jsx';
import MovieRec from './MovieRec.jsx';
import styles from '../stylesheet/styles.scss';

function App() {
  const [movies, setMovieData] = useState('');
  const handleMovieData = (data) => {
    setMovieData(data);
  };
  return (
    <div className='appContainer'>
      <Navbar />
      <MovieRec recommend={handleMovieData} />
      <Question recommend={handleMovieData} />
      <MovieContainer movies={movies} />
    </div>
  );
}

export default App;
