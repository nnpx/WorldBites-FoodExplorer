import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./css/general.css";
import "./css/queries.css";
import "./css/style.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
