import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent, NavigationComponent } from '../../components';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, NavigationComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {}
