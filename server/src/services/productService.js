import Product from '../models/productModel.js';

class ProductService {
  static async getAllProducts() {
    try {
      const products = await Product.getAllProducts();
      return products;
    } catch (err) {
      throw new Error(err.message);
    }
  }


  static async getProductById(id) {
    try {
      const product = await Product.getProductById(id);
      return product;
    } catch (err) {
      throw new Error(err.message);
    }
  }


  static async deleteProductById(id) {
    try {
      await Product.deleteProductById(id);
    } catch (err) {
      throw new Error(err.message);
    }
  }  


  static async updateProductById(id, updatedProductData) {
    try {
      await Product.updateProductById(id, updatedProductData);
    } catch (err) {
      throw new Error(err.message);
    }
  }  

  static async insertProduct(newProductData) {
    try {
      await Product.insertProduct(newProductData);
    } catch (err) {
      throw new Error(err.message);
    }
  }

}
export default ProductService;