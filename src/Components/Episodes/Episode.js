import { Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";

const Episode = ({ name, air_date, episode, characters, url, created }) => {
  return (
    <Col md={3} className="mt-3 mb-3">
      <Card>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>{episode}</p>
            <p>{air_date}</p>
            <small>{created}</small>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{characters}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href={url}>Ver capitulo</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Episode;
