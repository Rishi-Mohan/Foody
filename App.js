import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", {}, "Hello, H1"),
  React.createElement("h2", {}, "Hello, H2"),
]);

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
