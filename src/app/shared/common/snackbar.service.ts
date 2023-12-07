import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  duration = 5;

  constructor(private _snackBar: MatSnackBar) {}

  // typw:['success','error','info','warning']
  open(message: string, type: string) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      data: { message, type },
      duration: this.duration * 1000,
      panelClass: [this.findTypeError(type)],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  findTypeError(type: string) {
    switch (type) {
      case 'success': {
        return 'success-snackbar';
      }
      case 'error': {
        return 'error-snackbar';
      }
      case 'info': {
        return 'info-snackbar';
      }
      case 'warning': {
        return 'warning-snackbar';
      }
      default: {
        return 'default-snackbar';
      }
    }
  }
}
