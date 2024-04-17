import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import poster from '../assets/moviePoster.jpeg';

function MovieForm() {
  const [userInput, setUserInput] = useState('');
  const [answer, setAnswer] = useState(null);
  const [matchOrComfort, setMatchOrComfort] = useState('');

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
          answer: answer,
          matchOrComfort: matchOrComfort,
        }),
      });
      const data = await response.json();
      console.log(response.data);
    } catch (error) {
      console.error(`Error in the recommend movie ${error}`);
    }
  };

  let msg;
  switch (answer) {
    case 'joy':
      msg = (
        <h2>
          I am glad you had a good day !. Do you want to match that great mood
          or escape it?
        </h2>
      );
      break;
    case 'sadness':
      msg = <h2>I am sorry you had a bad day. Would you like some comfort?</h2>;
      break;
    default:
      msg = <h1></h1>;
  }

  return (
    <div className='container-fluid p-5 bg-dark'>
      <Card className='bg-dark text-white text-center'>
        {/* <Card.Header>Featured</Card.Header> */}
        <Card.Body>
          <Card.Title>
            <h1>Movie Recommender</h1>
          </Card.Title>
          <Card.Text>Your personal AI movie recommender.</Card.Text>
          <Button variant='danger'>Log me in</Button>{' '}
          <Button variant='secondary'>Sign me up</Button>
        </Card.Body>
        {/* <Card.Footer className='text-muted'>2 days ago</Card.Footer> */}
      </Card>
      <Form data-bs-theme='dark' onSubmit={handleSubmit}>
        <Form.Control
          size='lg'
          as='textarea'
          rows={3}
          placeholder='Tell me about your day ...'
          id='userInput'
          value={userInput}
          onChange={handleChange}
          required
        />
        <div className='d-grid gap-2'>
          <Button
            variant='danger'
            size='lg'
            onClick={handleRecommend}
            type='submit'
          >
            Send
          </Button>
        </div>
      </Form>
      <div>
        <Card data-bs-theme='dark' body>
          {msg}
        </Card>
        {answer ? (
          <ButtonGroup size='lg' className='mb-2 d-grid gap-2'>
            <Button variant='outline-danger'>Match my mood</Button>
            <Button variant='outline-danger'>
              I would like to escape my mood
            </Button>
          </ButtonGroup>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default MovieForm;
