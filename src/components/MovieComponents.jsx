import React, {useState, useRef} from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import ListGroup from 'react-bootstrap/ListGroup';

function MovieComponent(props) {

  const [show, setShow] = useState(false);
  const target = useRef(null);

  const {
    title,
    year,
    overview,
    genres,
    cast,
    poster_path,
    rating,
    rent,
    buy,
    id
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
          {overview.length > 125
            ? overview.substring(0, 125) + '...'
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
      <Card.Footer>
        <Button ref={target} onClick={() => setShow(!show)}>Details</Button>
        <Overlay target={target.current} show={show} placement="right">
          {(props) => (
            <Tooltip id="overlay-example" {...props}> My tooltip</Tooltip>
          )}
        </Overlay>
      </Card.Footer>
    </Card>
  );
}

//handle details event
//takes movie id
//supplies the rest of the props to 
//'/details/:movie_id'
const handleDetails = async () => {
  try {
    const response = await fetch(`/api/movies/:${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    })
  } catch (error) {
    console.log(`Error in details movie: ${error}`)
  }
}

export default MovieComponent;
