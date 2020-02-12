import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import {StockEntity} from './stock.model';

export interface StocksState extends EntityState<StockEntity> {
  data: {
    stocksList: string[]
  };
}

const initialState: StocksState = {
  data: {
    stocksList: ['AAPL', 'ARNA', 'CLDR', 'FB', 'AMZN', 'PLAY', 'CBS', 'NBIX', 'SBGI', 'LAUR', 'AAP', 'BA', 'BABA', 'CABO', 'DATA', 'MAN', 'ZEN', 'ZOES'],
  }
};

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'stocks',
  idKey: 'id'
})
export class StocksStore extends EntityStore<StocksState> {

  constructor() {
    super(initialState);
  }

}
