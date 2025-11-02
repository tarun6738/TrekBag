import { create } from "zustand";
import { initialItems } from "../constants/initialItems";

export const useItemsStore = create((set) => ({
  todoItems: initialItems,
  addItem: (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      item: newItemText,
      packed: false,
    };
    set((state) => ({ todoItems: [...state.todoItems, newItem] }));
  },
  deleteItem: (id) => {
    set((state) => {
      const newItems = state.todoItems.filter((item) => item.id !== id);
      return { todoItems: newItems };
    });
  },
  toggleItem: (id) => {
    set((state) => {
      const newItems = state.todoItems.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        }
        return item;
      });
      return { todoItems: newItems };
    });
  },
  removeAllItems: () => {
    set(() => ({ todoItems: [] }));
  },
  resetToInitial: () => {
    set(() => ({ todoItems: initialItems }));
  },
  markAllAsComplete: () => {
    set((state) => {
      const newItems = state.todoItems.map((item) => {
        return { ...item, packed: true };
      });
      return { todoItems: newItems };
    });
  },
  markAllAsInComplete: () => {
    set((state) => {
      const newItems = state.todoItems.map((item) => {
        return { ...item, packed: false };
      });
      return { todoItems: newItems };
    });
  },
}));
