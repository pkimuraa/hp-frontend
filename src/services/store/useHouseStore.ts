import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { HouseOptions } from "../../utils/types";
interface HouseState {
  house: HouseOptions | null;
  setHouse: (house: HouseOptions) => void;
}

export const useHouseStore = create<HouseState>()(
  devtools(
    persist(
      (set) => ({
        house: null,
        setHouse: (house) => set(() => ({ house })),
      }),
      {
        name: "user-house",
      }
    )
  )
);
