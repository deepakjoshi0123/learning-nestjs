import { Module } from '@nestjs/common';
import { UsersController } from './user.controllers';
import { UsersService } from './user.service';
import { DatabaseModule } from 'src/database/database.module';
@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
