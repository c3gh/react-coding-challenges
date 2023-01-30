import React from "react";
import { useFetch } from "./hooks/useFetch";

export default function App() {
  const { data, loading, error, fetchData } = useFetch(
    `https://jsonplaceholder.typicode.com/posts`
  );

  return (
    <div className="App">
      <button onClick={() => fetchData()}>Click</button>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {data && (
        <ul>
          {data.map(({ id, title, body }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
