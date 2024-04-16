import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function GridExample() {
  return (
    <Row xs={1} md={4} className='g-2' data-bs-theme='dark'>
      {Array.from({ length: 20 }).map((_, idx) => (
        <Col key={idx}>
          <Card style={{ width: '20rem' }}>
            <Card.Img
              variant='top'
              src='https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg'
            />
            <Card.Body>
              <Card.Title>Dune: Part Two</Card.Title>
              <Card.Subtitle className='mb-2 text-muted'>2024</Card.Subtitle>
              <Card.Text className='text-muted'>
                Follow the mythic journey of Paul Atreides as he unites with
                Chani and the Fremen while on a path of revenge against the
                conspirators who destroyed his family. Facing a choice between
                the love of his life and the fate of the known universe, Paul
                endeavors to prevent a terrible future only he can foresee
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>Science Fiction - Adventure</small>
            </Card.Footer>
            <Card.Footer>
              <Button variant='outline-danger'>Details</Button>{' '}
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;
