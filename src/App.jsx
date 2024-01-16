import { createRoot } from "react-dom/client";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div className="normal">
      <h1>Adopt Me!</h1>
      <Pet name="Luna" breed="Husky" age={10} />
      <Pet name="Spark" breed="Labrador" age={25} />
      <Pet name="Doink" breed="Foxy" age={30} />
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
