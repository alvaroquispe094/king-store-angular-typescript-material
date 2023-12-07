import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
    <app-admin-layout>
      <router-outlet></router-outlet>
    </app-admin-layout>
  `,
})
export class PagesComponent {}
