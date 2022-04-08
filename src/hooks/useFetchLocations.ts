import config from "global/config";
import { useEffect, useState } from "react";

export const useFetchLocation = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    setLoading(true);

    fetch(config.API_URL + config.endpoints.location)
      .then((response) => {
        if (!response.ok) {
          setError(`HTTP error! Status: ${response.status}`);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { loading, data, error };
};
