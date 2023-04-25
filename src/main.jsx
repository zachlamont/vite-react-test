import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { Board } from "./App.jsx";
import Game from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />

    <Game />
  </React.StrictMode>
);
