import React from "react";
import { Card } from "react-bootstrap";

function MyCard() {
  return (
    <>
      <Card
        style={{
          width: 400,
          backgroundColor: "pink",
        }}
      >
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>build on the card title and make up the</Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default MyCard;
