import { createContext, useEffect, useState } from "react";
import { initialItems } from "../constants/initialItems";

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
  const [todoItems, setTodoItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || initialItems
  );

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      item: newItemText,
      packed: false,
    };
    const newItems = [...todoItems, newItem];
    setTodoItems(newItems);
  };

  const handleDeleteItem = (id) => {
    const newItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(newItems);
  };

  const handleToggleItem = (id) => {
    const newItems = todoItems.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setTodoItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setTodoItems([]);
  };

  const handleResetToInitial = () => {
    setTodoItems(initialItems);
  };

  const handleMarkAllAsComplete = () => {
    const newItems = todoItems.map((item) => {
      return { ...item, packed: true };
    });
    setTodoItems(newItems);
  };

  const handleMarkAllAsInComplete = () => {
    const newItems = todoItems.map((item) => {
      return { ...item, packed: false };
    });
    setTodoItems(newItems);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(todoItems));
  }, [todoItems]);

  return (
    <ItemsContext.Provider
      value={{
        todoItems,
        handleAddItem,
        handleDeleteItem,
        handleToggleItem,
        handleRemoveAllItems,
        handleResetToInitial,
        handleMarkAllAsComplete,
        handleMarkAllAsInComplete,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
