import { Module } from '@nestjs/common';
import { ProductsController } from './product.controllers';
import { ProductsService } from './product.service';
import { DatabaseModule } from 'src/database/database.module';
@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductModule {}
