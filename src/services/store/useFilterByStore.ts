import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing
import { FilterOptions } from "../../utils/types";

interface FilterState {
  filter: FilterOptions;
  setFilterData: (filter: FilterOptions) => void;
}

export const useFilterByStore = create<FilterState>()(
  devtools(
    persist(
      (set) => ({
        filter: FilterOptions.ALL,
        setFilterData: (filter) => set((state) => ({ ...state, filter })),
      }),
      {
        name: "filter-by",
      }
    )
  )
);
