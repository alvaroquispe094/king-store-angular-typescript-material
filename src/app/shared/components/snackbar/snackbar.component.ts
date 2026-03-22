import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { SnackBarService, SnackbarItem } from '../../common';

@Component({
    selector: 'app-snackbar',
    imports: [CommonModule],
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {
  private readonly snackBarService = inject(SnackBarService);
  readonly notifications = this.snackBarService.notifications.asReadonly();
  readonly styles = computed<Record<string, string>>(() => ({
    success: 'border-emerald-200 bg-emerald-50 text-emerald-900',
    error: 'border-rose-200 bg-rose-50 text-rose-900',
    info: 'border-sky-200 bg-sky-50 text-sky-900',
    warning: 'border-amber-200 bg-amber-50 text-amber-900',
    default: 'border-slate-200 bg-white text-slate-900',
  }));

  dismiss(id: number) {
    this.snackBarService.dismiss(id);
  }

  iconFor(type: SnackbarItem['type']) {
    switch (type) {
      case 'success':
        return 'check';
      case 'error':
        return 'error';
      case 'info':
        return 'info';
      case 'warning':
        return 'warning';
      default:
        return 'note';
    }
  }
}
