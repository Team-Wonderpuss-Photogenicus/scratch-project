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
  } = props;

  console.log('props: ', props);
  console.log();

  return (
    <Card className='card' style={{ width: '17rem', height: 'auto' }}>
      <Card.Img
        variant='top'
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        style={{maxHeight: '17rem'}}
        className="card-img-top"
      />
      <Card.Body>
        <Card.Title>
          {title}
        </Card.Title>
        <Card.Text>{overview.length > 100 ? overview.substring(0, 100) + '...' : overview}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="bg-dark text-white"> Ratings: {rating}</ListGroup.Item>
        <ListGroup.Item className="bg-dark text-white">Release Date: {year}</ListGroup.Item>
        <ListGroup.Item className="bg-dark text-white">Cast: {cast}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      </Card.Body>
      {/* <Card.Footer> */}
        {/* <Card.Link href={streamingInfo[0].link}>streaming service link</Card.Link> */}
        {/* <Card.Link href='#'>other streaming service link</Card.Link> */}
      {/* </Card.Footer> */}
    </Card>
  );
}

export default MovieComponent;
