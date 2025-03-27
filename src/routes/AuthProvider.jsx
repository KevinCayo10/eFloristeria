import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import UserService from "../services/UserServices";
import { Navigate, redirect, useNavigate, useLocation } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(Cookies.get("access_token") || null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      const fetchUserData = async () => {
        await UserService.getUser()
          .then((response) => {
            setUser(response.data.user);
            console.log("response : ", response.data.user);
            // navigate(location.pathname);
          })
          .catch((error) => {
            console.log("Error : ", error);
            navigate("/login");
          });
      };
      fetchUserData();
    }
  }, [user]);

  const login = (userData, token) => {
    setUser(userData);
    navigate("/admin/panel");
  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };
  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, AuthContext };
