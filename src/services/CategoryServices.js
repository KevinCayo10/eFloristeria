import API from "../api/axios";

const CategoryServices = {
  getCategories: async () => {
    try {
      const response = await API.get(`/categorias/`);
      const products = await response.data;
      return products;
    } catch (error) {
      throw error; // Lanza el error para manejarlo en el componente
    }
  },
};
export default CategoryServices;
