import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import poster from '../assets/moviePoster.jpeg';

function MovieForm() {
  return (
    <div className='container-fluid p-5 bg-dark'>
      <Card className='bg-dark text-white text-center'>
        {/* <Card.Header>Featured</Card.Header> */}
        <Card.Body>
          <Card.Title>
            <h1>Movie Recommendar</h1>
          </Card.Title>
          <Card.Text>Your personal AI movie recommender.</Card.Text>
          <Button variant='danger'>Log me in</Button>{' '}
          <Button variant='secondary'>Sign me up</Button>
        </Card.Body>
        {/* <Card.Footer className='text-muted'>2 days ago</Card.Footer> */}
      </Card>
      <Form data-bs-theme='dark'>
        <Form.Control
          size='lg'
          as='textarea'
          rows={3}
          placeholder='Tell me about your day?'
        />
        <Button variant='danger' type='submit'>
          Show movies
        </Button>
      </Form>
    </div>
  );
}

export default MovieForm;
