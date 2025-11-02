import Logo from "./Logo";
import Counter from "./Counter";
import { useItemsStore } from "../stores/itemsStore";

export default function Header() {
  const todoItems = useItemsStore(state => state.todoItems)
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
