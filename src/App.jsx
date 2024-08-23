import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import NavBar from "./components/NavBar";
import Favorites from "./pages/Favorites/index";
import Details from "./pages/Details/index";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/recipie-item/:id" element={<Details />} />
      </Routes>
    </>
  );
}
