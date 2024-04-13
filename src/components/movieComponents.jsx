import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function MovieComponent({title, year, overview, genres, streamingInfo, directors, cast}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{ title } ({ year })</Card.Title>
        <Card.Text>
          {overview}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Genres: 
            <ul>
                {genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                ))}
            </ul>
        </ListGroup.Item>
        <ListGroup.Item>Directors:
            <ul>
                {directors.map(director => (
                    <li key={director}>{director}</li>
                ))}
            </ul>
        </ListGroup.Item>
        <ListGroup.Item>Cast:
            <ul>
                {cast.map(actor => (
                    <li key={actor}>{actor}</li>
                ))}
            </ul>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        {/* can check if property is availble, show only availble */}
        <Card.Link href={streamingInfo.link}>streaming service link</Card.Link>
        <Card.Link href="#">other streaming service link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default MovieComponent;
