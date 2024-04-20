import React from 'react';
import styles from '../stylesheet/styles.scss';
import right from '../assets/right.jpeg';
import Container from 'react-bootstrap/Container';

const MovieRec = () => {
  return (
    <Container>
      <div className='recContainer'>
        <div className='center'>
          <h1 className='recTitle'>Movie Mood Matcher</h1>
          <p className='description'>
            Your personal AI movie recommender based on your mood!
          </p>
          <div className='recButtons'>
            <button className='recButton'>Login</button>
            <button className='recButton'>Register</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MovieRec;
