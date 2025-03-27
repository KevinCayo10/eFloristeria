import API from "./api/axios";

class UserService {
  static async getUser() {
    try {
      const response = await API.get("/usuarios/");
      const data = await response.data;
      return data;
    } catch (error) {}
  }
}

export default UserService;
