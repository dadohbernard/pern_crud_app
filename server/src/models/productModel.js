import pool from '../../config/db.js';

class Product {
  static async getAllProducts() {
    const result = await pool.query('SELECT * FROM items');
    return result.rows;
  }


  static async getProductById(id) {
    const result = await pool.query('SELECT * FROM items WHERE id = $1', [id]);
    return result.rows[0];
  }


  static async deleteProductById(id) {
    await pool.query('DELETE FROM items WHERE id = $1', [id]);
  }

  
  static async updateProductById(id, updatedProductData) {
    const { title } = updatedProductData;
    await pool.query('UPDATE items SET title = $1 WHERE id = $2', [title, id]);
  }


  static async insertProduct(newProductData) {
    const { title } = newProductData;
    await pool.query('INSERT INTO items (title) VALUES ($1)', [title]);
  }


}



export default Product;
