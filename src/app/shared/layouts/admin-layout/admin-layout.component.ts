import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent, FooterComponent } from '../../components';
import { SideContainerLayoutComponent } from '../side-container-layout/side-container-layout.component';
import { RouterModule } from '@angular/router';
import { MENU_ADMIN } from '../../common';
import { NavigationModel } from 'src/app/domain/models/navigation.model';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
  imports: [
    CommonModule,
    NavigationComponent,
    FooterComponent,
    SideContainerLayoutComponent,
    RouterModule,
  ],
})
export class AdminLayoutComponent implements OnInit, OnDestroy {
  items?: NavigationModel[];

  ngOnInit(): void {
    this.items = MENU_ADMIN;
  }

  ngOnDestroy(): void {
    this.items = [];
  }
}
