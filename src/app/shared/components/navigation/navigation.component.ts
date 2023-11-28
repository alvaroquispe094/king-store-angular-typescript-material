import { Component, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MenuModel } from 'src/app/domain/models/menu.model';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnDestroy {
  @Input() items?: MenuModel[];
  visible?: boolean = false;

  ngOnDestroy(): void {
    this.items = [];
  }

  setVisibleState(param: boolean) {
    this.visible = param;
  }
}
