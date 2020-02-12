import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PortfolioLayoutComponent} from './components/portfolio-layout/portfolio-layout.component';
import {SummaryComponent} from './components/summary/summary.component';

const routes: Routes = [
  { path: '', component: PortfolioLayoutComponent },
  { path: 'summary', component: SummaryComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class PortfolioRoutingModule { }
