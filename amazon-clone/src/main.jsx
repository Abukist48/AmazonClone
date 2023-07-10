
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StateProvider } from "./Components/StateProvider.jsx";
import reducer, { initialState } from "./Components/reducer.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
);
