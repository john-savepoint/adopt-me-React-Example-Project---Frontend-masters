import { createRoot } from "react-dom/client";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./Details";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/"> Adopt Me!</Link>
      </header>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
      {/* <Pet name="Luna" breed="Husky" age={10} />
      <Pet name="Spark" breed="Labrador" age={25} />
      <Pet name="Doink" breed="Foxy" age={30} /> */}
      {/* <SearchParams /> */}
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
