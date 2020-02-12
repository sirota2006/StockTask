import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import { StocksQuery, StocksService} from '../../state';
import {Observable, Subscription} from 'rxjs';
import {optimizeGroupPlayer} from '@angular/animations/browser/src/render/shared';

@Component({
  selector: 'app-portfolio-layout',
  templateUrl: './portfolio-layout.component.html',
  styleUrls: ['./portfolio-layout.component.scss']
})
export class PortfolioLayoutComponent implements OnInit, OnChanges, OnDestroy {
  stocksList$: Observable<string[]>;
  refreshRate = 3;
  constructor(private stockService: StocksService, private stocksQuery: StocksQuery) { }

  ngOnInit() {
    this.stocksList$ = this.stocksQuery.stocksList$;
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  onUpdateRefreshRate(e) {
    if (e.target.value < 1.5 || !e.target.value) {
      this.refreshRate = 1.5;
      return;
    }
    this.stockService.updateRefreshRate(e.target.value);
  }

  onStockSelect(stockName: string) {
    this.stockService.handleStockSelect(stockName);
  }

  ngOnDestroy(): void {
  }

}
