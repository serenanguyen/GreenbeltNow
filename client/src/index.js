import React from "react";
import { render } from "react-dom";
import "./assets/style.css";
import App from "./App";
import Store from "./Store";

const Index = () => {
  return (
    // Store contains context providers which is then rendering App inside
    <Store>
      <App />
    </Store>
  );
};

render(<Index />, document.getElementById("root"));
