import NavBar from "./components/navBar/index";
import Details from "./pages/details/index";
import Favorites from "./pages/favorites/index";
import Home from "./pages/home/index";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/recipe-item/:id" element={<Details />} />
      </Routes>
    </>
  );
}
