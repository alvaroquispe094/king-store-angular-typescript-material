import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent, FooterComponent } from '../../components';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
  imports: [CommonModule, NavigationComponent, FooterComponent, HeaderComponent, RouterModule],
})
export class AdminPageComponent {}
