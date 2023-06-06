import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const items = ["kale", "Cucumber"];

ReactDOM.render(<App items={items} />, document.getElementById("root"));
