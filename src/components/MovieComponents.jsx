import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import right from '../assets/right.jpeg';

function MovieComponent(props) {
  const {
    title,
    year,
    overview,
    genres,
    streamingInfo,
    directors,
    cast,
    poster_path,
    rating,
    rent,
    buy,
  } = props;

  console.log('props: ', props);
  console.log();

  return (
    <Card className='card' style={{ width: '15rem' }}>
      <Card.Img
        variant='top'
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        // style={{maxHeight: '16rem'}}
        className='card-img-top'
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className='sub'>
          {overview.length > 100
            ? overview.substring(0, 100) + '...'
            : overview}
        </Card.Text>
      </Card.Body>
      <ListGroup className='list-group-flush'>
        <ListGroup.Item className='bg-dark text-white'>
          {' '}
          Ratings: <div className='float-end'> {rating}</div>
        </ListGroup.Item>
        <ListGroup.Item className='bg-dark text-white'>
          Release Date:
          <div className='float-end'> {year}</div>
        </ListGroup.Item>
        <ListGroup.Item className='bg-dark text-white'>
          Rent: {rent}
        </ListGroup.Item>
        <ListGroup.Item className='bg-dark text-white'>
          Buy: {buy}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body></Card.Body>
    </Card>
  );
}

export default MovieComponent;
