import { columns } from "@/pages/item/columns-item";
import { create } from "zustand";

interface TableState {
  columns: typeof columns;
}

export const useTableStore = create<TableState>(() => ({
  columns,
}));
