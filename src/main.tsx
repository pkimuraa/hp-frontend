import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { queryClient } from "./services/http/queryClient";
import "./styles/main.scss";
import { router } from "./routes.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./services/context/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <RouterProvider router={router} />
        <ToastContainer
          position="bottom-left"
          theme="dark"
          toastClassName="border"
          draggablePercent={30}
          stacked
          hideProgressBar={false}
        />
        <ToastContainer />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
