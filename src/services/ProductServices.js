import API from "../api/axios";

const ProductService = {
  getProducts: async () => {
    try {
      const response = await API.get(`/productos/`);
      const products = await response.data;
      return products;
    } catch (error) {
      throw error; // Lanza el error para manejarlo en el componente
    }
  },

  getProductsOrders: async () => {
    try {
      const response = await API.get(`/productos/order/`);
      const products = await response.data;
      return products;
    } catch (error) {
      throw error; // Lanza el error para manejarlo en el componente
    }
  },

  getProductDetail: async (id) => {
    try {
      const response = await API.get(`/productos/${id}`);
      const product = await response.data;
      return product;
    } catch (error) {
      throw error;
    }
  },
};
export default ProductService;
