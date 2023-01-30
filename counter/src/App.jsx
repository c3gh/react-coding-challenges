import React from "react";

const Button = ({ render }) => render();

export default function App() {
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <h1>{counter}</h1>
      <Button
        render={() => (
          <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
            Click me!
          </button>
        )}
      />
    </div>
  );
}
