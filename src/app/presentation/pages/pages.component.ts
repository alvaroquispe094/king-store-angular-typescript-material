import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
    <app-admin-page>
      <router-outlet></router-outlet>
    </app-admin-page>
  `,
})
export class PagesComponent {}
