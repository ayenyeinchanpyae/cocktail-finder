import "./App.css";
import Home from "./pages/Home";
import SingleCocktail from "./pages/SingleCocktail";
import { Route, Routes } from "react-router-dom";
import CocktailList from "./pages/CocktailList";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import About from "./pages/About";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cocktails" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktails/:id" element={<SingleCocktail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
