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
import { AuthContext, AuthProvider } from "./routes/AuthProvider";
import Register from "./views/auth/Register";
import Navbar from "./components/cnavbar/Navbar";
import { AdminRoutesProtected } from "./routes/ProtectedRoutes";
import { useContext } from "react";
import { AuthProtectedRoute } from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout />
      </AuthProvider>
    </BrowserRouter>
  );
}

function Layout() {
  const location = useLocation();
  const noHeaderFooterPaths = ["/admin/panel"];
  const shouldShowHeaderFooter = !noHeaderFooterPaths.some((path) =>
    location.pathname.startsWith(path)
  );
  return (
    <>
      {shouldShowHeaderFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto/:id" element={<Product />} />
        <Route path="/contactos" element={<Contact />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/tienda" element={<Shop />} />
        <Route path="/carrito" element={<CardCartProduct />} />
        {/* Proteger las rutas cuando se logea */}
        <Route path="/login" element={<AuthProtectedRoute element={Login} />} />
        <Route
          path="/registro"
          element={<AuthProtectedRoute element={Register} />}
        />
        {/* Rutas protegidas */}
        <Route path="/*" element={<AdminRoutesProtected />} />
      </Routes>
      {shouldShowHeaderFooter && <Footer />}
    </>
  );
}
export default App;
