import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import MovieContainer from '../containers/movieContainer.jsx';
import Question from './Question.jsx';
import MovieRec from './MovieRec.jsx';
import styles from '../stylesheet/styles.scss';
import NavbarDisplay from './NavbarDisplay.jsx';
import Container from 'react-bootstrap/Container';
import MovieForm from './MovieForm.jsx';
import MovieGrid from '../containers/MovieGrid.jsx';

function App() {
  return (
    <div className='bg-dark'>
      <NavbarDisplay />
      {/* <Navbar /> */}

      <Container>
        <MovieForm />
        <MovieGrid />
        {/* <MovieRec /> */}
        {/*<Question />
      <MovieContainer /> */}
      </Container>
    </div>
  );
}

export default App;
