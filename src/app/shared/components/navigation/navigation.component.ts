import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { NavigationModel } from '../../../domain/models/navigation.model';
import { StorageService } from '../../common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, OnDestroy {
  @Input() items?: NavigationModel[];
  visible?: boolean = false;
  role = '';

  constructor(private storageService: StorageService) {}
  ngOnInit(): void {
    this.getRole();
  }

  ngOnDestroy(): void {
    this.items = [];
  }

  setVisibleState(param: boolean) {
    this.visible = param;
  }

  signOut() {
    this.storageService.clean();
  }

  reloadPage(): void {
    window.location.reload();
  }

  getRole(): void {
    this.role = this.storageService.getUser().roles[0];
  }
}
