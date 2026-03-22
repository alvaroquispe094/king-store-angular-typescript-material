import { Component, Input, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { NavigationModel } from '../../../domain/models/navigation.model';
import { StorageService } from '../../common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, OnDestroy {
  @Input() items?: NavigationModel[];
  readonly menuOpen = signal(false);
  role = '';

  constructor(private storageService: StorageService) {}
  ngOnInit(): void {
    this.getRole();
  }

  ngOnDestroy(): void {
    this.items = [];
  }

  setVisibleState(param: boolean) {
    this.menuOpen.set(param);
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

  resolveIcon(icon: string) {
    switch (icon) {
      case 'shopping_basket':
        return 'fa-shopping-basket';
      case 'person':
        return 'fa-user';
      case 'subdirectory_arrow_left':
        return 'fa-sign-out';
      default:
        return 'fa-circle';
    }
  }
}
