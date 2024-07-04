import API from "./api/axios";

class CategoryServices {
  static async getCategories() {
    try {
      const response = await API.get(`/categorias/`);
      const products = await response.data;
      return products;
    } catch (error) {
      throw error; // Lanza el error para manejarlo en el componente
    }
  }
}
export default CategoryServices;
