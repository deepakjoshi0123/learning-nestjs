import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Product extends Model<Product> {
  @Column
  id: number;

  @Column
  ProductName: number;

  @Column
  ProductType: string;

  @Column
  Price: string;
}
