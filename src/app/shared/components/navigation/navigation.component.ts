import { Component, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { NavigationModel } from '../../../domain/models/navigation.model';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnDestroy {
  @Input() items?: NavigationModel[];
  visible?: boolean = false;

  ngOnDestroy(): void {
    this.items = [];
  }

  setVisibleState(param: boolean) {
    this.visible = param;
  }
}
