import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { queryClient } from "./services/http/queryClient";
import "./styles/main.scss";
import { QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        position="bottom-left"
        theme="dark"
        toastClassName="border"
        draggablePercent={30}
        stacked
        hideProgressBar={false}
      />
      <ToastContainer />
    </QueryClientProvider>
  </StrictMode>
);
