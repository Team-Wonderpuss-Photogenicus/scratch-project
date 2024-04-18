import React, { useState } from 'react';
import styles from '../stylesheet/styles.scss';

const Question = () => {
  const [userInput, setUserInput] = useState('');
  const [answer, setAnswer] = useState('');
  const [matchOrComfort, setMatchOrComfort] = useState('matching');

  const handleSubmit = async (event) => {
    console.log('in the first question handleSubmit');
    event.preventDefault();
    try {
      // const response = await axios.post("/api/emotions", {
      //   answer: "I am very happy today",
      //   params:{userInput},
      // });
      console.log('userInput', userInput);
      //const response = await axios.get("/api/");
      const response = await fetch('/api/emotions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answer: userInput }),
      });
      if (!response.ok) {
        throw new Error('error in emotion fetch');
      }
      const answer = await response.json();
      console.log('response', response);
      console.log('answer', answer);
      setAnswer(answer);
    } catch (error) {
      console.error(`Error in fetch first submit ${error}`);
    }
  };

  const handleChange = async (event) => {
    setUserInput(event.target.value);
  };

  const handleSelect = async (event) => {
    console.log('in the second question handleSelect');
    setMatchOrComfort(event.target.value);
  };

  const handleRecommend = async () => {
    console.log('in the handle recommend');
    console.log(answer, matchOrComfort);
    try {
      const response = await fetch('/api/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emotion: answer,
          matchOrEscape: matchOrComfort,
          page: 1,
        }),
      });
      const data = await response.json();
      console.log(response.data);
    } catch (error) {
      console.error(`Error in the recommend movie ${error}`);
    }
  };

  return (
    <div className='questionContainer'>
      <p className='question'>How's your day?</p>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          id='userInput'
          value={userInput}
          className='text'
          onChange={handleChange}
          required
        />
        <button type='submit' className='submit'>
          Submit
        </button>
      </form>
      <p className='question'>
        It seems you are {answer}. Do you want to match it or comfort it?
      </p>
      <select value={matchOrComfort} onChange={handleSelect}>
        <option value='matching' selected>
          Match
        </option>
        <option value='escaping'>Escaping</option>
      </select>
      <button onClick={handleRecommend} type='submit' className='submit'>
        Recommend
      </button>
      <br />
      <br />
    </div>
  );
};

export default Question;
