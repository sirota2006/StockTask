import { Component, OnInit } from '@angular/core';
import {StocksQuery} from '../../state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  volumeSum$: Observable<number>;
  constructor(private stocksQuery: StocksQuery) { }

  ngOnInit() {
    this.volumeSum$ = this.stocksQuery.volumeSum$;
  }

}
