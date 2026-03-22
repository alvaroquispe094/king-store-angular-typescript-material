import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SnackbarComponent } from './shared/components/snackbar/snackbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SnackbarComponent],
  template: '<app-snackbar></app-snackbar><router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'king-store';
}
