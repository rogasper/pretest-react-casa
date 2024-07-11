"use client";
import { useState } from "react";
import styles from "@/styles/Todo.module.css";

function Home() {
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
      <div className={styles.wrapperTodo}>
        <h1>Todo List React</h1>
        <form onSubmit={(e) => onSubmit(e)} className="form">
          <input
            type="text"
            value={value}
            className={styles.inputTodo}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        <div className={styles.parentList}>
          {items.map((item) => (
            <div key={item.id} className={styles.containerTodo}>
              <input
                type="checkbox"
                onClick={() => onHandleComplete(item.id)}
              />
              <p onClick={() => onDelete(item.id)} className={styles.delete}>
                🗑️
              </p>
              <label className={item.isComplete ? styles.textStraight : ""}>
                {item.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
