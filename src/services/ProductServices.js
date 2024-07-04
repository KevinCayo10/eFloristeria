import API from "./api/axios";

class ProductService {
  static async getProducts() {
    try {
      const response = await API.get(`/productos/`);
      const products = await response.data;
      return products;
    } catch (error) {
      throw error; // Lanza el error para manejarlo en el componente
    }
  }

  static async getProductsOrders() {
    try {
      const response = await API.get(`/productos/order/`);
      const products = await response.data;
      return products;
    } catch (error) {
      throw error; // Lanza el error para manejarlo en el componente
    }
  }

  static async getProductDetail(id) {
    try {
      console.log("get producto id : ", id);
      const response = await API.get(`/productos/${id}`);
      const product = await response.data;
      return product;
    } catch (error) {
      throw error;
    }
  }
}
export default ProductService;
