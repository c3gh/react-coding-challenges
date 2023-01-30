import { useState } from "react";

export const useFetch = (URL) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setLoading(true);

    try {
      const response = await fetch(URL);

      if (!response.ok) throw new Error(response.statusText);

      const json = await response.json();

      setData(json);
      setError(false);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return {
    data,
    loading,
    error,
    fetchData,
  };
};
