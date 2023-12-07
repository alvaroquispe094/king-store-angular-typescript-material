import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  template: `
    <app-landing-layout>
      <router-outlet></router-outlet>
    </app-landing-layout>
  `,
})
export class LandingComponent {}
