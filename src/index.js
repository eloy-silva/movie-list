import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProviderMovies } from "./contexts/contextMovies";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ProviderMovies>
      <App />
    </ProviderMovies>
  </React.StrictMode>
);
