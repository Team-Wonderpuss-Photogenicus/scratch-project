import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import MovieContainer from '../containers/movieContainer.jsx';
import Question from './Question.jsx';
import MovieRec from './MovieRec.jsx';
import styles from '../stylesheet/styles.scss';

function App() {
  return (
    <div>
      <Navbar />
      <MovieRec />
      {/*<Question />
      <MovieContainer /> */}
    </div>
  );
}

export default App;
