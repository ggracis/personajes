// custom hook es una funcion personalizada que involucra uno o más hooks
// custom hooks  -> funcional

// SSR -> NEXT / NUST

import { useEffect, useState } from "react";
const BASE_URL =
  "https://api.themoviedb.org/3/movie/550?api_key=bc7e75b69fc88b8184c3bf605f28ebea";
export const useFetch = (endpoint, initialState = []) => {
  const [data, setData] = useState(initialState);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const result = await fetch(`${BASE_URL}`, {
        method: "GET",
        //mode: "no-cors",
      });
      const data = await result.json();
      console.log("Algo traje");
      setData(data);
      setFetching(false);
    } catch (e) {
      console.log("ERROR");
      setData(initialState);
      setFetching(false);
      setError(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return [data, fetching, error];
};
