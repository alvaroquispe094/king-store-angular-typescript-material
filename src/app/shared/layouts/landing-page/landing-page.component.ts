import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent, NavigationComponent } from '../../components';
import { MENU_GUEST } from '../../common';
import { MenuModel } from 'src/app/domain/models/menu.model';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, NavigationComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit, OnDestroy {
  items?: MenuModel[];

  ngOnInit(): void {
    this.items = MENU_GUEST;
  }
  ngOnDestroy(): void {
    this.items = [];
  }
}
