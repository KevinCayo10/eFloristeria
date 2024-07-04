import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Contact from "./views/Contact";
import Home from "./views/Home";
import About from "./views/About";
import Footer from "./components/Footer";
import Product from "./views/Product";
import "./assets/FontAwesomeIcons/icons";
import Shop from "./views/Shop";
import CardCartProduct from "./components/CardCartProduct";
import Login from "./views/auth/Login";
import { AuthProvider } from "./context/AuthProvider";
import Register from "./views/auth/Register";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <AuthProvider>
          <Layout />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  const location = useLocation();
  const noHeaderFooterPaths = ["/admin"];
  const shouldShowHeaderFooter = !noHeaderFooterPaths.some((path) =>
    location.pathname.startsWith(path)
  );
  return (
    <>
      {shouldShowHeaderFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<CardCartProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {shouldShowHeaderFooter && <Footer />}
    </>
  );
}
export default App;
