import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing
import { WizardCharacter } from "../../utils/types";

interface FavoriteState {
  favorites: WizardCharacter[]; // Store WizardCharacter type
  addFavorite: (character: WizardCharacter) => void;
  removeFavorite: (characterId: string) => void;
  clearFavorites: () => void;
}

export const useFavoriteStore = create<FavoriteState>()(
  devtools(
    persist(
      (set) => ({
        favorites: [],
        addFavorite: (character) =>
          set((state) => ({
            favorites: [...state.favorites, character],
          })),
        removeFavorite: (characterId) =>
          set((state) => ({
            favorites: state.favorites.filter(
              (character) => character.id !== characterId
            ),
          })),
        clearFavorites: () => set({ favorites: [] }),
      }),
      {
        name: "favorite-characters",
      }
    )
  )
);
