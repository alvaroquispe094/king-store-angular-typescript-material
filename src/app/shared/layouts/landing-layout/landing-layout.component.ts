import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent, NavigationComponent } from '../../components';
import { MENU_CUSTOMER, MENU_GUEST, StorageService } from '../../common';
import { NavigationModel } from '../../../domain/models/navigation.model';

@Component({
  selector: 'app-landing-layout',
  standalone: true,
  imports: [CommonModule, NavigationComponent, FooterComponent],
  templateUrl: './landing-layout.component.html',
  styleUrls: ['./landing-layout.component.scss'],
})
export class LandingLayoutComponent implements OnInit, OnDestroy {
  items?: NavigationModel[];

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.storageService.isLoggedIn() ? (this.items = MENU_CUSTOMER) : (this.items = MENU_GUEST);
  }
  ngOnDestroy(): void {
    this.items = [];
  }
}
