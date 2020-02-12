import { ID } from '@datorama/akita';

export interface StockEntity {
  id: ID;
  stock: string;
  price: number;
  volume: number;
  lastUpdated: string;
}
