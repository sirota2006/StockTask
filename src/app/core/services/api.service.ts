import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_KEY = 'OLF1CKCAYO59A7EF';
const API_BASE_URL = 'https://www.alphavantage.co/query';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getStocksData(symbol: string): Observable<any> {
    return this.httpClient.get(API_BASE_URL, {
      params: {
        function: 'GLOBAL_QUOTE',
        symbol: symbol,
        apikey: API_KEY
      }
    });
  }
}
