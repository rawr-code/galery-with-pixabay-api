import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./styles/globalStyles.scss";

ReactDOM.render(
  <React.StrictMode>
    <App message="Hello world" />
  </React.StrictMode>,
  document.getElementById("root")
);
