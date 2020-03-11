import { Sequelize } from 'sequelize-typescript';
import { Product } from '../product/product.entity';
import { User } from '../user/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'netzwelt',
        database: 'boilerplate',
      });
      sequelize.addModels([Product, User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
