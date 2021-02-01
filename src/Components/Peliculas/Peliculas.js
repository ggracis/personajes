// componente lógica ( peticion http + map )
import { useFetch } from "../../customHooks/useFetch";
import { Row } from "react-bootstrap";
/* Spinner */
import Loading from "../Loading";
/* Componente de presentacion */
import Pelicula from "./Pelicula";

/* Custom hook */
const Peliculas = () => {
  const [data, fetching] = useFetch("popular");
  const { results: peliculas } = data;

  return (
    <Row className="mt-5">
      {fetching ? ( // Si fetching es True
        <Loading /> // Cargando
      ) : peliculas.length ? (
        // cuando cargó armo el map
        peliculas.map((pelicula) => (
          <Pelicula key={pelicula.id} {...pelicula} />
        ))
      ) : null}
    </Row>
  );
};

export default Peliculas;
