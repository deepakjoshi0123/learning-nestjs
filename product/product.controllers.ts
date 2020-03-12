import {
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Body,
  Query,
} from '@nestjs/common';
import { ProductsService } from './product.service';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('addproduct')
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
  @Get('getproducts')
  getproducts(@Query('start') start1: number, @Query('end') end1: number) {
    return this.productsService.getProducts(start1, end1);
  }
  @Post('edit/:id')
  editproduct(
    @Param('id') id: number,
    @Body('ProductName') ProductName: string,
    @Body('ProductType') ProductType: string,
    @Body('Price') Price: string,
  ) {
    this.productsService.postEditProduct(id, ProductName, ProductType, Price);
    return 'updated succesfully';
  }
  @Delete('delete/:id')
  delproduct(@Param('id') id: number) {
    this.productsService.deleteProduct(id);
    return 'deleted succesfully';
  }
  @Get('search/:ProductName')
  searchProduct(@Param('ProductName') ProductName: string) {
    return this.productsService.searchProduct(ProductName);
  }
}
