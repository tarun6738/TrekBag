import React, { useContext } from "react";
import Logo from "./Logo";
import Counter from "./Counter";
import { ItemsContext } from "../contexts/ItemsContextProvider";

export default function Header() {
  const { todoItems } = useContext(ItemsContext);
  return (
    <header>
      <Logo />
      <Counter
        totalNumberOfItems={todoItems.length}
        numberOfItemsPacked={todoItems.filter((item) => item.packed).length}
      />
    </header>
  );
}
