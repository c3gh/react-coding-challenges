import React from "react";

export default function App() {
  const [value, setValue] = React.useState("");
  const [list, setList] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, value]);
    setValue("");
  };

  const handleDelete = (element) => {
    const filteredList = list.filter((el) => el !== element);
    setList([...filteredList]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit">Click</button>
      </form>
      {list.length > 0 && (
        <ul>
          {list.map((el, index) => {
            return (
              <li key={index} onClick={() => handleDelete(el)}>
                {el}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
