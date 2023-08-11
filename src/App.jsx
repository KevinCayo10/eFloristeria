import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./views/Contact";
import Home from "./views/Home";
import About from "./views/About";
import Footer from "./components/Footer";
import Product from "./views/Product";
import "./assets/FontAwesomeIcons/icons";
import Shop from "./views/Shop";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto/:id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
      <footer className="mt-0.5">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
