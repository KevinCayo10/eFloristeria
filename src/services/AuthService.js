import API from "./api/axios";

class AuthService {
  static async login(user) {
    try {
      const response = await API.post("/auth/login/", user);
      const data = await response.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  static async register(user) {
    try {
      const response = await API.post("/auth/register/", user);
      const data = await response.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}

export default AuthService;
