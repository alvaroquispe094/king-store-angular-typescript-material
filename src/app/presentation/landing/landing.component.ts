import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingLayoutComponent } from '../../shared/layouts';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [LandingLayoutComponent, RouterOutlet],
  template: `
    <app-landing-layout>
      <router-outlet></router-outlet>
    </app-landing-layout>
  `,
})
export class LandingComponent {}
