import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  template: `
    <app-landing-page>
      <router-outlet></router-outlet>
    </app-landing-page>
  `,
})
export class LandingComponent {}
