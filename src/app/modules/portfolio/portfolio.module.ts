import { NgModule } from '@angular/core';
import { PortfolioLayoutComponent } from './components/portfolio-layout/portfolio-layout.component';
import {PortfolioRoutingModule} from './portfolio-routing.module';
import {SharedModule} from '../../shared/shared.module';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { StockItemComponent } from './components/stock-item/stock-item.component';
import { SummaryComponent } from './components/summary/summary.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    PortfolioRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [PortfolioLayoutComponent, StockListComponent, StockItemComponent, SummaryComponent]
})
export class PortfolioModule { }
