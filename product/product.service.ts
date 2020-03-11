import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
  Inject,
} from '@nestjs/common';
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
    } catch (error) {
      console.log(error);
    }
  }
  getProducts() {}
  //   postEditProduct() {}
  //   deleteProduct() {}
  //   searchProduct() {}
}
