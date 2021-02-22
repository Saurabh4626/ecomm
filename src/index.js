import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import App from "./Components/App";
import reducer, { initialState } from "./Components/reducer";
import { StateProvider } from "./Components/StateProvider";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);