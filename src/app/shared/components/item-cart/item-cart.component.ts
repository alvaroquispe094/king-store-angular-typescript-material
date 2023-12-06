import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-item-cart',
  standalone: true,
  imports: [CommonModule, MatDividerModule, MatIconModule, MatButtonModule, MatListModule],
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.scss'],
})
export class ItemCartComponent {
  @Input() image?: string;
  @Input() name?: string;
  @Input() description?: string;
  @Input() price?: number;
}
