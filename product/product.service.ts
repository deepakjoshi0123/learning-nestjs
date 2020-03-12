import { Injectable } from '@nestjs/common';
import { Product } from '../product/product.entity';

@Injectable()
export class ProductsService {
  async postAddProduct(
    ProductName: string,
    ProductType: string,
    Price: string,
  ) {
    try {
      const result = await Product.create({
        ProductName: ProductName,
        ProductType: ProductType,
        Price: Price,
      });
      if (!result) throw new Error('unable to insert');
      return result.id;
    } catch (error) {
      console.log(error);
    }
  }
  async getProducts(start: number, end: number) {
    console.log('helloo ', start, end);
    try {
      const products = await Product.findAll({
        offset: start,
        limit: end,
      });
      if (!products) {
        const error = new Error('unable to get products');
        throw error;
      }
      return products;
    } catch (error) {
      console.log(error);
    }
  }
  async postEditProduct(
    id: number,
    ProductName: string,
    ProductType: string,
    Price: string,
  ) {
    try {
      const product = await Product.findByPk(id);
      product.ProductName = ProductName;
      product.ProductType = ProductType;
      product.Price = Price;
      const resSave = await product.save();

      if (!resSave || !product) {
        const err = new Error('error in udpatation');
        throw err;
      }
    } catch (err) {
      console.log(err);
    }
  }
  async deleteProduct(id: number) {
    try {
      const result = await Product.destroy({
        where: { id: id },
      });
      if (!result) {
        const err = new Error('error in deletion');
        throw err;
      }
      return 'deleted successfully';
    } catch (err) {
      console.log(err);
    }
  }
  async searchProduct(ProductName: string) {
    try {
      const result = await Product.findAll({
        where: { ProductName: ProductName },
      });
      if (!result) {
        const err = new Error('error in search');
        throw err;
      }
      return result;
    } catch (err) {
      console.log(err);
    }
  }
}
