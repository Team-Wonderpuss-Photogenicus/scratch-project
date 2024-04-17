import React from "react";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ListGroup from "react-bootstrap/ListGroup";
import right from '../assets/right.jpeg';


function MovieComponent(props) {
  const {title, year, overview, genres, streamingInfo, directors, cast, poster_path} = props;

  console.log('props: ', props)
  

  return (
    <Col md={4}>
    <Card className="card" style={{ width: "20rem" }}>
      <Card.Img variant="top" src={right} />
      <Card.Body>
        <Card.Title>{ title } ({ year })</Card.Title>
        <Card.Text>
          {overview}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item> Genres: {genres}
        </ListGroup.Item>
        <ListGroup.Item>Directors: {directors}
        </ListGroup.Item>
        <ListGroup.Item>Cast: {cast}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        {/* can check if property is availble, show only availble */}
        {/* <Card.Link href={streamingInfo[0].link}>streaming service link</Card.Link> */}
        <Card.Link href="#">other streaming service link</Card.Link>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default MovieComponent;
