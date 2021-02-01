import { Col, Card, Button } from "react-bootstrap";

const Pelicula = ({ original_title, overview, release_date, poster_path }) => {
  return (
    <Col md={4} className="mt-3 mb-3">
      <Card>
        <Card.Img variant={"top"} src={poster_path} alt="" />
        <Card.Body>
          <Card.Title>
            {original_title} - {release_date}
          </Card.Title>
          <Card.Text>
            <p>{overview}</p>
          </Card.Text>
          <Button type="button" variant="primary" block>
            Ver más
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Pelicula;
