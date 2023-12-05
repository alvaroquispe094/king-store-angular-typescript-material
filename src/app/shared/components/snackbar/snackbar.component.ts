import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MAT_SNACK_BAR_DATA, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatSnackBarModule, MatIconModule],
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent {
  message? = '';
  icon? = '';
  snackBarRef1 = inject(MatSnackBarRef);
  data = inject(MAT_SNACK_BAR_DATA);

  constructor() {
    this.message = this.data.message;
    this.icon = this.findIcon(this.data.type);
  }

  findIcon(type: string) {
    switch (type) {
      case 'success': {
        return 'fa fa-check-circle-o fa-lg';
        break;
      }
      case 'error': {
        return 'fa fa-exclamation-triangle fa-lg';
        break;
      }
      case 'info': {
        return 'fa fa-info-circle fa-lg';
        break;
      }
      case 'warning': {
        return 'fa fa-exclamation-circle fa-lg';
        break;
      }
      default: {
        return 'fa fa-question-circle fa-lg';
        break;
      }
    }
  }
}
