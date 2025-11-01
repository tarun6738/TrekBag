import React, { useState, useRef } from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItem }) {
  const [todoItem, setTodoItem] = useState("");
  const inputRef = useRef();

  const handleChange = (e) => {
    setTodoItem(e.target.value);
    console.log("todoItem", todoItem);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!todoItem){
        alert("Input cannot be empty!"); 
        inputRef.current.focus();
        return;
    }
    onAddItem(todoItem);
    setTodoItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an Item</h2>
      <input ref={inputRef} type="text" onChange={handleChange} value={todoItem} autoFocus/>
      <Button type="submit">Add to list</Button>
    </form>
  );
}
