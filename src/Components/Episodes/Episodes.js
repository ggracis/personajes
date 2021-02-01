// componente lógica ( peticion http + map )
import { useFetch } from "./../../customHooks/useFetch";
import { Row } from "react-bootstrap";
/* Spinner */
import Loading from "./../Loading";
/* Componente de presentacion */
import Episode from "./Episode";

/* Custom hook */
const Episodes = () => {
  const [data, fetching, error] = useFetch("episode");
  const { info, results: episodes } = data;
  return (
    <Row className="mt-5">
      {fetching ? ( // Si fetching es True
        <Loading /> // Cargando
      ) : (
        // cuando cargó armo el map
        episodes.map((episode) => <Episode key={episode.id} {...episode} />)
      )}
    </Row>
  );
};

export default Episodes;
