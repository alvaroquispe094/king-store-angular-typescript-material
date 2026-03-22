import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminLayoutComponent } from '../../shared/layouts';

@Component({
    selector: 'app-pages',
    imports: [AdminLayoutComponent, RouterOutlet],
    template: `
    <app-admin-layout>
      <router-outlet></router-outlet>
    </app-admin-layout>
  `
})
export class PagesComponent {}
