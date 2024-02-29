
import ProductService from '../services/productService.js';

class ProductController {
  static async getAllProducts(req, res) {
    try {
      const products = await ProductService.getAllProducts();
      res.json(products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }


  static async getProductById(req, res) {
    try {
      const productId = req.params.id;
      const product = await ProductService.getProductById(productId);
      res.json(product);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }


  static async deleteProductById(req, res) {
    try {
      const productId = req.params.id;
      await ProductService.deleteProductById(productId);
      res.json({ message: 'Product deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async updateProductById(req, res) {
    try {
      const productId = req.params.id;
      const updatedProductData = req.body;
      await ProductService.updateProductById(productId, updatedProductData);
      res.json({ message: 'Product updated successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async insertProduct(req, res) {
    try {
      const newProductData = req.body;
      await ProductService.insertProduct(newProductData);
      res.json({ message: 'Product inserted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

}
export default ProductController;
