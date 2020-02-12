import {Component, OnInit} from '@angular/core';
import {StockEntity, StocksQuery, StocksService} from '../../state';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
  allStocks$: Observable<StockEntity[]>;
  interval$: Subscription;

  constructor(private stocksService: StocksService, private stocksQuery: StocksQuery) {
  }

  ngOnInit() {
    this.allStocks$ = this.stocksQuery.allStocks$;
    this.initInterval();
  }

  initInterval() {
    if (!this.stocksService.isIntervalSet) {
      this.interval$ = this.stocksService.updateStocks$.subscribe(() => {
        this.stocksService.updateAllStocks(this.stocksQuery.getAll());
      });

      this.stocksService.clearInterval$.subscribe(() => {
        this.interval$.unsubscribe();
      });
    }
  }

  onRemoveStock(stock: StockEntity) {
    this.stocksService.handleStockRemove(stock);
  }

}
