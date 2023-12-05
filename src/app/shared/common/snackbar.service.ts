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
  action = 'undo';
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
        break;
      }
      case 'error': {
        return 'error-snackbar';
        break;
      }
      case 'info': {
        return 'info-snackbar';
        break;
      }
      case 'warning': {
        return 'warning-snackbar';
        break;
      }
      default: {
        //statements;
        return 'default-snackbar';
        break;
      }
    }
  }
}
