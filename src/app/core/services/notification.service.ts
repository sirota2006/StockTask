import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  notify(content: string) {
    this.snackBar.open(content, null, {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right'
    });
  }
}
