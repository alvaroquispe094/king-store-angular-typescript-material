import { Component, Input, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { NavigationModel } from '../../../domain/models/navigation.model';
import { StorageService } from '../../common';

@Component({
    selector: 'app-navigation',
    imports: [CommonModule, RouterModule, RouterLinkActive],
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  @Input() items?: NavigationModel[];
  readonly menuOpen = signal(false);
  private readonly storageService = inject(StorageService);
  private readonly router = inject(Router);
  role = '';
  ngOnInit(): void {
    this.getRole();
  }

  ngOnDestroy(): void {
    this.items = [];
  }

  setVisibleState(param: boolean) {
    this.menuOpen.set(param);
  }

  signOut(): void {
    this.storageService.clean();
    this.role = '';
    this.menuOpen.set(false);
    void this.router.navigate(['/sign_in']);
  }

  getRole(): void {
    this.role = this.storageService.getUser().roles[0] ?? '';
  }

  resolveIcon(icon: string): string {
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
