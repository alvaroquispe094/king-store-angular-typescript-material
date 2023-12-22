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

  success(message: string) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      data: { message, type: 'success' },
      duration: this.duration * 1000,
      panelClass: ['success-snackbar'],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  error(message: string) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      data: { message, type: 'error' },
      duration: this.duration * 1000,
      panelClass: ['error-snackbar'],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  info(message: string) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      data: { message, type: 'info' },
      duration: this.duration * 1000,
      panelClass: ['info-snackbar'],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  warning(message: string) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      data: { message, type: 'warning' },
      duration: this.duration * 1000,
      panelClass: ['warning-snackbar'],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  default(message: string) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      data: { message, type: 'default' },
      duration: this.duration * 1000,
      panelClass: ['default-snackbar'],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
