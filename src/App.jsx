import React from "react";
import { createRoot } from "react-dom";
import PropTypes from "prop-types";

// const Pet = ({ name, breed, age }) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, name),
//     React.createElement("h2", {}, breed),
//     React.createElement("h2", {}, age),
//   ]);
// };

const Pet = ({ name, breed, age }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{breed}</h2>
      <h2>{age}</h2>
    </div>
  );
};

Pet.propTypes = {
  name: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

const App = () => (
  <div className="normal">
    <h1>Adopt Me!</h1>
    <Pet name="Luna" breed="Husky" age={10} />
    <Pet name="Sparky" breed="Labrador" age={25} />
    <Pet name="Doink" breed="Foxy" age={30} />
  </div>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
