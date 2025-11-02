import Select from "react-select";
import EmptyView from "./EmptyView";
import { useMemo, useState } from "react";
import { useItemsStore } from "../stores/itemsStore";

const sortingOptions = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  },
];

export default function ItemList() {
  const todoItems = useItemsStore(state => state.todoItems);
  const toggleItem = useItemsStore(state => state.toggleItem);
  const deleteItem = useItemsStore(state => state.deleteItem);
  const [sortBy, setSortBy] = useState("default");
  const sortedItems = useMemo(
    () =>
      [...todoItems].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        } else if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }
        return;
      }),
    [todoItems, sortBy]
  );

  return (
    <ul className="item-list">
      {todoItems.length === 0 && <EmptyView />}
      {todoItems.length > 0 ? (
        <section className="sorting">
          <Select
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
            onChange={(option) => setSortBy(option.value)}
          />
        </section>
      ) : null}
      {sortedItems.map((todoItem) => {
        return (
          <Item
            todoItem={todoItem}
            onDeleteItem={deleteItem}
            onToggleItem={toggleItem}
          />
        );
      })}
    </ul>
  );
}

function Item({ todoItem, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={todoItem.packed}
          onChange={() => onToggleItem(todoItem.id)}
        />
        {todoItem.item}
      </label>
      <button onClick={() => onDeleteItem(todoItem.id)}>❌</button>
    </li>
  );
}
