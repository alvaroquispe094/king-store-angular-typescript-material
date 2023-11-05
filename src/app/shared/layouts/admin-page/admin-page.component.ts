import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent, FooterComponent } from '../../components';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [CommonModule, NavigationComponent, FooterComponent],
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent {}
