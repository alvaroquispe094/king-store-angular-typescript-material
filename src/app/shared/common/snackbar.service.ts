import { Injectable, signal } from '@angular/core';

export type SnackbarType = 'success' | 'error' | 'info' | 'warning' | 'default';

export interface SnackbarItem {
  id: number;
  message: string;
  type: SnackbarType;
}

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  readonly notifications = signal<SnackbarItem[]>([]);
  private readonly duration = 5000;

  success(message: string) {
    this.open(message, 'success');
  }

  error(message: string) {
    this.open(message, 'error');
  }

  info(message: string) {
    this.open(message, 'info');
  }

  warning(message: string) {
    this.open(message, 'warning');
  }

  default(message: string) {
    this.open(message, 'default');
  }

  dismiss(id: number) {
    this.notifications.update(items => items.filter(item => item.id !== id));
  }

  private open(message: string, type: SnackbarType) {
    const id = Date.now() + Math.floor(Math.random() * 1000);
    this.notifications.update(items => [...items, { id, message, type }]);
    setTimeout(() => this.dismiss(id), this.duration);
  }
}
