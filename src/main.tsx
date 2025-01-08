import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App.tsx";
import "@/styles/main.css";
import "@/index.css";
import "@/intl";

createRoot(document.getElementById("root") as Element).render(
  <StrictMode>
    <App />
  </StrictMode>
);
