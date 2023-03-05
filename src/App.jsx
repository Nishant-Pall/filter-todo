import { useEffect, useRef, useState } from 'react';

const App = () => {

  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    const value = inputRef.current.value;

    if (value === '') return;
    setItems((prev) => {
      return [...prev, value];
    });
    setFilteredItems((prev) => {
      return [...prev, value];
    });

    inputRef.current.value = "";

  };

  const onChange = (e) => {
    const value = e.target.value;
    setFilteredItems(
      items.filter(item => item.toLowerCase().includes(value.toLowerCase()))
    );
  };

  return (
    <>
      Search:
      <input onChange={onChange} type='search' />
      <br />
      <br />
      <form onSubmit={onSubmit}>
        New item: <input ref={inputRef} type='text' />
        <button type='submit'>Add</button>
      </form>
      <h3>Items:</h3>
      {filteredItems.map((item) => (
        <div>{item}</div>
      ))}
    </>
  );
};

export default App;
