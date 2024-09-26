import { createBrowserRouter, Navigate } from "react-router-dom";
import { CardList } from "./pages/CardList";
import { CharacterDetails } from "./pages/CharacterDetails";
import { MainLayout } from "./pages/MainLayout.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="characters" replace />,
      },
      {
        path: "characters",
        element: <CardList />,
      },
      {
        path: "characters/:characterId",
        element: <CharacterDetails />,
      },
    ],
  },
]);
