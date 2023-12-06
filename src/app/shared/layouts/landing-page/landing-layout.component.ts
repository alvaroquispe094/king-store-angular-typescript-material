import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent, NavigationComponent } from '../../components';
import { MENU_GUEST } from '../../common';
import { MenuModel } from 'src/app/domain/models/menu.model';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, NavigationComponent, FooterComponent],
  templateUrl: './landing-layout.component.html',
  styleUrls: ['./landing-layout.component.scss'],
})
export class LandingLayoutComponent implements OnInit, OnDestroy {
  items?: MenuModel[];

  ngOnInit(): void {
    this.items = MENU_GUEST;
  }
  ngOnDestroy(): void {
    this.items = [];
  }
}