import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./css/general.css";
import "./css/queries.css";
import "./css/style.css";

import store from "./store/index.js";
import { Provider } from "react-redux";

// const entryPoint = document.getElementById("root");
// ReactDOM.createRoot(entryPoint).render(<App />);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
