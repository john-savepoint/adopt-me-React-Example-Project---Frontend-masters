import React from "react";
import { createRoot } from "react-dom";
import Pet from "./Pet";

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
root.render(<App />);
