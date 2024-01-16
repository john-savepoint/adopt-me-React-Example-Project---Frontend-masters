import React from "react";
import { createRoot } from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.breed),
    React.createElement("h2", {}, props.age),
  ]);
};

const App = () => {
  return React.createElement("div", { className: "normal" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Luna", breed: "Husky", age: "10" }),
    React.createElement(Pet, { name: "Sparky", breed: "Labrador", age: "25" }),
    React.createElement(Pet, { name: "DOink", breed: "FOxy", age: "30" }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
