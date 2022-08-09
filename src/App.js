import "./App.css";
import Home from "./pages/Home";
import SingleCocktail from "./pages/SingleCocktail";
import { Route, Routes } from "react-router-dom";
import CocktailList from "./pages/CocktailList";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import About from "./pages/About";
import OrdinaryDrink from "./pages/OrdinaryDrink";
import SoftDrink from "./pages/SoftDrink";
import HomemadeLiqueur from "./pages/HomemadeLiqueur";
import Shot from "./pages/Shot";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cocktails" element={<Home />} />
        <Route path="/OrdinaryDrink" element={<OrdinaryDrink />} />
        <Route path="/SoftDrink" element={<SoftDrink />} />
        <Route path="/HomemadeLiqueur" element={<HomemadeLiqueur />} />
        <Route path="/Shot" element={<Shot />} />

        <Route path="/about" element={<About />} />
        <Route path="/cocktails/:id" element={<SingleCocktail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
