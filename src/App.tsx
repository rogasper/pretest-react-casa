import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Item 1",
      isComplete: false,
    },
  ]);
  const [value, setValue] = useState("");
  const onSubmit = (e: any) => {
    e.preventDefault();
    setItems([
      ...items,
      {
        id: items.length + 1,
        name: value,
        isComplete: false,
      },
    ]);
    setValue("");
  };
  const onHandleComplete = (id: number) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isComplete: !item.isComplete,
          };
        }
        return item;
      })
    );
  };
  const onDelete = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };
  return (
    <>
      <div>
        <h1>Todo List React</h1>
        <form onSubmit={(e) => onSubmit(e)} className="form">
          <input
            type="text"
            value={value}
            className="inputTodo"
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        <div>
          {items.map((item) => (
            <div key={item.id} className="containerTodo">
              <input
                type="checkbox"
                onClick={() => onHandleComplete(item.id)}
              />
              <p onClick={() => onDelete(item.id)} className="delete">
                🗑️
              </p>
              <label className={item.isComplete ? "textStraight" : ""}>
                {item.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
