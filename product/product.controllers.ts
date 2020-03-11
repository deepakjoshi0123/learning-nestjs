import {
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Delete,
  Body,
} from '@nestjs/common';

import { ProductsService } from './product.service';
import { ProductModule } from './product.module';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body('ProductName') ProductName: string,
    @Body('ProductType') ProductType: string,
    @Body('Price') Price: string,
  ) {
    const generatedId = this.productsService.postAddProduct(
      ProductName,
      ProductType,
      Price,
    );
    return { id: generatedId };
  }
}
