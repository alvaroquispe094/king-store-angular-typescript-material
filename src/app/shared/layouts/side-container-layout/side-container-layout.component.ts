import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { ADMIN_OPTIONS } from '../../common';
import { SidenavComponent } from '../../components';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './side-container-layout.component.html',
  styleUrls: ['./side-container-layout.component.scss'],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    RouterModule,
    SidenavComponent,
  ],
})
export class SideContainerLayoutComponent {
  private breakpointObserver = inject(BreakpointObserver);
  _options = ADMIN_OPTIONS;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay()
  );
}
