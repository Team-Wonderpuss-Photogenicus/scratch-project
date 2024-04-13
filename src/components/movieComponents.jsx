import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function MovieComponent() {
  return (
    <movieCard style={{ width: "18rem" }}>
      <movieCard.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <movieCard.Body>
        <movieCard.Title>Movie Name</movieCard.Title>
        <movieCard.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </movieCard.Text>
      </movieCard.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>List item 1</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <movieCard.Body>
        {/* need to iterate over this links? */}
        {/* can check if property is availble, show only availble */}
        <movieCard.Link href="#">streaming service link</movieCard.Link>
        <movieCard.Link href="#">other streaming service link</movieCard.Link>
      </movieCard.Body>
    </movieCard>
  );
}

export default MovieComponent;
