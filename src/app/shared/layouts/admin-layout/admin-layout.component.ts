import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent, FooterComponent } from '../../components';
import { SideContainerLayoutComponent } from '../side-container-layout/side-container-layout.component';
import { RouterModule } from '@angular/router';
import { MENU_ADMIN, MENU_CUSTOMER, MENU_GUEST } from '../../common';
import { NavigationModel } from '../../../domain/models/navigation.model';
import { StorageService } from '../../common/storage.service';

@Component({
  selector: 'app-admin-layout',
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

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.storageService.isLoggedIn()
      ? this.storageService.getUser().roles[0] == 'ROLE_CUSTOMER'
        ? (this.items = MENU_CUSTOMER)
        : (this.items = MENU_ADMIN)
      : (this.items = MENU_GUEST);
  }

  ngOnDestroy(): void {
    this.items = [];
  }
}
