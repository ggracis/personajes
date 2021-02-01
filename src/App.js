import { Container } from "react-bootstrap";
import Navbar from "./Components/Navbar";
import Peliculas from "./Components/Peliculas";

// useRef
function App() {
  return (
    <Container>
      <Navbar />
      <Peliculas />
    </Container>
  );
}

export default App;
