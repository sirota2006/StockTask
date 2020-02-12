import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatButtonToggleModule,
  MatCardModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule,
  MatSnackBarModule
} from '@angular/material';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';
import {TimeAgoPipe} from 'time-ago-pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatMenuModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    RouterModule,
    MatIconModule,
    FontAwesomeModule
  ],
  exports: [
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatMenuModule,
    MatSnackBarModule,
    CustomSelectComponent,
    TimeAgoPipe,
    OrderByPipe,
    MatInputModule,
    MatFormFieldModule,
    NavbarComponent,
    MatButtonToggleModule,
    MatIconModule,
    FontAwesomeModule,
    CommonModule
  ],
  declarations: [CustomSelectComponent, TimeAgoPipe, OrderByPipe, NavbarComponent]
})
export class SharedModule { }
