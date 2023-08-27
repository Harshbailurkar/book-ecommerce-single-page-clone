import React from "react";
import ReactDOM from "react-dom/client";
import App from "./component/App";
import "./index.css";

let RootEl = ReactDOM.createRoot(document.getElementById("root"));
RootEl.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
