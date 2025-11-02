import Button from "./Button";
import { useItemsStore } from "../stores/itemsStore";

export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore(state => state.markAllAsComplete)
  const markAllAsInComplete = useItemsStore(state => state.markAllAsInComplete)
  const resetToInitial = useItemsStore(state => state.resetToInitial)
  const removeAllItems = useItemsStore(state => state.removeAllItems)
  return (
    <section className="button-group">
      <Button buttonType="secondary" onClick={markAllAsComplete}>
        Mark all as complete
      </Button>
      <Button buttonType="secondary" onClick={markAllAsInComplete}>
        Mark all as incomplete
      </Button>
      <Button buttonType="secondary" onClick={resetToInitial}>
        Reset to initial
      </Button>
      <Button buttonType="secondary" onClick={removeAllItems}>
        Remove all items
      </Button>
    </section>
  );
}
