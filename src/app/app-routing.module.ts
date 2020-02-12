import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  { path: 'portfolio', loadChildren: './modules/portfolio/portfolio.module#PortfolioModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
