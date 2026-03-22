import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ADMIN_OPTIONS, CUSTOMER_OPTIONS } from '../../common';
import { FileNode, SidenavComponent } from '../../components';
import { StorageService } from '../../common/storage.service';

@Component({
    selector: 'app-side-container-layout',
    templateUrl: './side-container-layout.component.html',
    styleUrls: ['./side-container-layout.component.scss'],
    imports: [CommonModule, RouterModule, SidenavComponent]
})
export class SideContainerLayoutComponent {
  readonly asideOpen = signal(false);
  _options: FileNode[];

  constructor(private storageService: StorageService) {
    if (storageService.isAdminUser()) {
      this._options = ADMIN_OPTIONS;
    } else {
      this._options = CUSTOMER_OPTIONS;
    }
  }
}
