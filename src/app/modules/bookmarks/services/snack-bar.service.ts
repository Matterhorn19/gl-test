import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SnackBarService {

  constructor(private snackBar: MatSnackBar,) { }

  public show(message: string = '', actions: string = ''): void {
    this.snackBar.open(message, actions, {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    })
  }
}
