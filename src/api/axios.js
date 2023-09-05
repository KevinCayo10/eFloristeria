import axios from "axios";

const baseURL = "http://localhost:4600/api";

const API = axios.create({
  baseURL,
  withCredentials: false,
});

// API.interceptors.request.use(
//   function (req) {
//     const token = JSON.parse(localStorage.getItem("token") ?? JSON.stringify(""));
//     if (token) req.headers["auth-token"] = token;
//     return req;
//   },
//   function (error) {
//     return Promise.reject(error);
//   },
// );

export default API;
