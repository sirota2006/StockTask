import { Injectable } from '@angular/core';
import { StocksStore } from './stocks.store';
import {ApiService} from '../../../core/services/api.service';
import {StockEntity} from './stock.model';
import {guid, ID} from '@datorama/akita';
import {NotificationService} from '../../../core/services/notification.service';
import {interval, Subject} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class StocksService {
  refreshRate: number;
  updateDataRefresh$: Subject<number> = new Subject();
  updateStocks$: Subject<void> = new Subject();
  clearInterval$: Subject<void> = new Subject();
  isIntervalSet = false;
  constructor(private stocksStore: StocksStore, private apiService: ApiService, private notificationService: NotificationService) {
  }

  initRefreshInterval() {
    this.isIntervalSet = true;
    this.updateDataRefresh$.pipe(switchMap(time => interval(time))).subscribe(() => this.updateStocks$.next());
    this.updateRefreshRate(3);
  }

  updateRefreshRate(newRate: number) {
    this.refreshRate = newRate * 1000;
    this.updateDataRefresh$.next(this.refreshRate);
  }

  updateAllStocks(stocks: StockEntity[]) {
    stocks.forEach(stock => this.handleStockUpdate(stock));
  }

  handleStockUpdate(stockEntity: StockEntity) {
     this.apiService.getStocksData(stockEntity.stock).subscribe(stockResponse => {
      if (stockResponse['Global Quote']) {
        const stock = this.parseStockResponse(stockResponse['Global Quote'], stockEntity.id);
        this.updateStock(stock);
      } else {
        this.handleError(stockEntity.stock);
      }
    }, () => {
      this.handleError(stockEntity.stock);
    });
  }

  updateStock(stockEntity: StockEntity) {
    this.stocksStore.update(stockEntity.id, stockEntity);
  }

  handleStockSelect(stockName: string) {
    this.removeFromStockList(stockName);
    this.apiService.getStocksData(stockName).subscribe(stockResponse => {
        if (stockResponse['Global Quote']) {
          const stock = this.parseStockResponse(stockResponse['Global Quote']);
          this.addStock(stock);
        } else {
          this.handleError(stockName, true);
        }
    }, () => this.handleError(stockName, true));
  }

  handleError(stockName: string, isFromAdd = false) {
    this.clearInterval$.next()
    this.notificationService.notify('Api Error for stock: ' + stockName);
    if (isFromAdd) {
      this.addToStockList(stockName);
    }
  }

  addStock(stock: StockEntity) {
    this.initRefreshInterval();
    this.stocksStore.add(stock);
  }

  removeFromStockList(stockName) {
    this.stocksStore.update(state => {
      return {
        data: {
          ...state.data,
          stocksList: state.data.stocksList.filter(stock => stock !== stockName)
        }
      };
    });
  }

  handleStockRemove(stock: StockEntity) {
    this.stocksStore.remove(stock.id);
    this.addToStockList(stock.stock);
  }

  addToStockList(stockName: string) {
    this.stocksStore.update(state => {
      return {
        data: {
          ...state.data,
          stocksList: state.data.stocksList.concat(stockName)
        }
      };
    });
  }

  parseStockResponse(stockResponse, id?: ID): StockEntity {
    const stockValuesArr = Object.values(stockResponse);
    return {
      id: id ? id : guid(),
      stock: stockValuesArr[0] as string,
      price: stockValuesArr[4] as number,
      volume: stockValuesArr[5] as number,
      lastUpdated: new Date().toUTCString()
    };
  }

}
