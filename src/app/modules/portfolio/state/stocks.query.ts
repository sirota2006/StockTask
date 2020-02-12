import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { StocksStore, StocksState } from './stocks.store';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {StockEntity} from './stock.model';

@Injectable({ providedIn: 'root' })
export class StocksQuery extends QueryEntity<StocksState> {

  constructor(protected store: StocksStore) {
    super(store);
  }

  stocksList$: Observable<string[]> = this.select(state => state.data.stocksList);
  allStocks$: Observable<StockEntity[]> = this.selectAll();
  volumeSum$: Observable<number> = this.selectAll().pipe(map(stocks => stocks.map(stock => Number(stock.volume)).reduce((acc, value) => acc + value)));
}
