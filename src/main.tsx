import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary
      fallback={
        <div className="IMissTailwindAlready">
          Whoops! Something went wrong! ☠️
        </div>
      }
      onError={() => {
        document.documentElement.classList.add("error");
      }}
      onReset={() => {
        document.documentElement.classList.remove("error");
      }}
    >
      <App />
    </ErrorBoundary>
  </StrictMode>
);
