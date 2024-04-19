import React, { useState } from 'react';
import styles from '../stylesheet/styles.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

const Question = ({ recommend }) => {
  const [userInput, setUserInput] = useState('');
  const [answer, setAnswer] = useState('');
  const [matchOrComfort, setMatchOrComfort] = useState('matching');
  const [submitClick, setSubmitClick] = useState(false);
  const [page, setPage] = useState(2);

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
      setSubmitClick(true);
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
      console.log('the data infrontend from backend', data);
      recommend(data);
    } catch (error) {
      console.error(`Error in the recommend movie ${error}`);
    }
  };

  const handleNext = async () => {
    console.log('in the handle recommend');
    console.log(answer, matchOrComfort);
    setPage(page + 1);
    console.log('page', page);
    try {
      const response = await fetch('/api/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emotion: answer,
          matchOrEscape: matchOrComfort,
          page: page,
        }),
      });
      const data = await response.json();
      console.log('the data infrontend from backend', data);
      recommend(data);
    } catch (error) {
      console.error(`Error in the recommend movie ${error}`);
    }
  };

  return (
    <Container>
      <div className='questionContainer'>
        <p className='question'>Tell me about your day!</p>
        <form onSubmit={handleSubmit}>
          <Form.Group
            className='mb-3'
            controlId='exampleForm.ControlTextarea1'
            value={userInput}
            onChange={handleChange}
          >
            {/* <Form.Label>Example textarea</Form.Label> */}
            <Form.Control
              as='textarea'
              rows={3}
              placeholder='Tell me about your day!'
              data-bs-theme='dark'
            />
          </Form.Group>
          <div className='d-grid gap-2'>
            <Button type='submit' variant='outline-primary' size='lg'>
              Analyze text
            </Button>
          </div>
          <br></br>
        </form>
        {submitClick && (
          <>
            <p className='question'>
              Seems like you're feeling {answer}. Do you want to keep feeling
              that way or do you want to escape that feeling?
            </p>
            <Form.Select
              aria-label='Default select example'
              value={matchOrComfort}
              onChange={handleSelect}
              data-bs-theme='dark'
            >
              <option>Open this select menu</option>
              <option value='matching'>Match It</option>
              <option value='escaping'>Escape It</option>
            </Form.Select>
            {/* <select value={matchOrComfort} onChange={handleSelect}>
              <option value='matching'>Match It</option>
              <option value='escaping'>Escape It</option>
            </select> */}
            <div className='d-grid gap-2'>
              <Button
                onClick={handleRecommend}
                type='submit'
                variant='outline-primary'
                size='lg'
              >
                Recommend Movies
              </Button>
            </div>

            <div className='end'>
              <Button variant='outline-primary' onClick={handleNext}>
                Next Page
              </Button>{' '}
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default Question;
