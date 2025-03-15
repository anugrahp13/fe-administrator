import { create } from "zustand";
import { SortingState, ColumnFiltersState, VisibilityState, RowSelectionState } from "@tanstack/react-table";

interface DataTableStore {
  sorting: SortingState;
  setSorting: (updater: SortingState | ((prev: SortingState) => SortingState)) => void;
  columnFilters: ColumnFiltersState;
  setColumnFilters: (updater: ColumnFiltersState | ((prev: ColumnFiltersState) => ColumnFiltersState)) => void;
  columnVisibility: VisibilityState;
  setColumnVisibility: (updater: VisibilityState | ((prev: VisibilityState) => VisibilityState)) => void;
  rowSelection: RowSelectionState;
  setRowSelection: (updater: RowSelectionState | ((prev: RowSelectionState) => RowSelectionState)) => void;
}

export const useDataTableStore = create<DataTableStore>((set) => ({
  sorting: [],
  setSorting: (updater) => set((state) => ({
    sorting: typeof updater === "function" ? updater(state.sorting) : updater,
  })),
  columnFilters: [],
  setColumnFilters: (updater) => set((state) => ({
    columnFilters: typeof updater === "function" ? updater(state.columnFilters) : updater,
  })),
  columnVisibility: {},
  setColumnVisibility: (updater) => set((state) => ({
    columnVisibility: typeof updater === "function" ? updater(state.columnVisibility) : updater,
  })),
  rowSelection: {},
  setRowSelection: (updater) => set((state) => ({
    rowSelection: typeof updater === "function" ? updater(state.rowSelection) : updater,
  })),
}));
