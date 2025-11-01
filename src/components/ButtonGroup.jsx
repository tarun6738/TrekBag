import React, { useContext } from "react";
import Button from "./Button";
import { ItemsContext } from "../contexts/ItemsContextProvider";

export default function ButtonGroup() {
  const {
    handleMarkAllAsComplete,
    handleMarkAllAsInComplete,
    handleRemoveAllItems,
    handleResetToInitial,
  } = useContext(ItemsContext);
  return (
    <section className="button-group">
      <Button buttonType="secondary" onClick={handleMarkAllAsComplete}>
        Mark all as complete
      </Button>
      <Button buttonType="secondary" onClick={handleMarkAllAsInComplete}>
        Mark all as incomplete
      </Button>
      <Button buttonType="secondary" onClick={handleResetToInitial}>
        Reset to initial
      </Button>
      <Button buttonType="secondary" onClick={handleRemoveAllItems}>
        Remove all items
      </Button>
    </section>
  );
}
