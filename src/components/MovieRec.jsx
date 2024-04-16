import React from 'react';
import styles from '../stylesheet/styles.scss';
import right from '../assets/right.jpeg';

const MovieRec = () => {
  return (
    <div className='recContainer'>
      <div className='left'>
        <h1 className='recTitle'>Movie Recommender</h1>
        <p className='description'>Your personal AI movie recommender.</p>
        <div className='recButtons'>
          <button className='recButton'>Login</button>
          <button className='recButton'>Register</button>
        </div>
      </div>
      <div className='right'>
        <img src={right} alt='Right Side Image' className='image' />
      </div>
    </div>
  );
};

export default MovieRec;
