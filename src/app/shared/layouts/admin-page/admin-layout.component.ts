import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent, FooterComponent } from '../../components';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { MENU_ADMIN } from '../../common';
import { MenuModel } from 'src/app/domain/models/menu.model';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
  imports: [CommonModule, NavigationComponent, FooterComponent, HeaderComponent, RouterModule],
})
export class AdminLayoutComponent implements OnInit, OnDestroy {
  items?: MenuModel[];

  ngOnInit(): void {
    this.items = MENU_ADMIN;
  }

  ngOnDestroy(): void {
    this.items = [];
  }
}
