import { Row, Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
const navBar = () => {
  return (
    <Row className="mb-5">
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">Peliculas</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#personajes">Personajes</Nav.Link>
          <Nav.Link href="#episodios">Episodios</Nav.Link>
          <Nav.Link href="#lugares">Lugares</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </Row>
  );
};

export default navBar;
