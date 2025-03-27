import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPanel from "../views/admin/AdminPanel";
import ProtectedRoute, {
  AdminProtectedRoute,
  AuthProtectedRoute,
} from "./ProtectedRoute";
import SidebarComponent from "../components/sidebar/Sidebar";
import AdminsProductos from "../views/admin/AdminProductos";
import AdminUsuarios from "../views/admin/AdminUsuarios";
import GNavbar from "../components/gNavbar/gNavbar";

export const AdminRoutesProtected = () => {
  return (
    <>
      <div className="w-full h-full grid">
        <GNavbar />
        <div className="flex">
          <SidebarComponent />
          <Routes>
            <Route
              path="/admin/panel"
              element={<AdminProtectedRoute element={AdminPanel} />}
            />
            <Route
              path="/admin/productos"
              element={<AdminProtectedRoute element={AdminsProductos} />}
            />
            <Route
              path="/admin/usuarios"
              element={<AdminProtectedRoute element={AdminUsuarios} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
