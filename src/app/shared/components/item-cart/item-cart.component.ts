import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CartModel } from '../../../domain/models/cart.model';
import { CartService } from '../../common/cart.service';

@Component({
  selector: 'app-item-cart',
  standalone: true,
  imports: [CommonModule, MatDividerModule, MatIconModule, MatButtonModule, MatListModule],
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.scss'],
})
export class ItemCartComponent implements OnChanges {
  @Output() size_items: EventEmitter<number> = new EventEmitter();
  @Input() item!: CartModel;
  cart!: CartModel;

  constructor(private _cartService: CartService) {}

  ngOnChanges(): void {
    this.cart = this.item;
  }

  add() {
    this._cartService.add(this.cart);
  }

  substract() {
    this._cartService.subtract(this.cart);
    this._cartService.currentDataCart$.subscribe(x => {
      if (x) {
        this.size_items.emit(x.length);
      }
    });
  }

  removeItem() {
    this._cartService.remove(this.cart);
    this._cartService.currentDataCart$.subscribe(x => {
      if (x) {
        this.size_items.emit(x.length);
      }
    });
  }

  cleanCart() {
    this._cartService.clean();
    this._cartService.currentDataCart$.subscribe(x => {
      if (x) {
        this.size_items.emit(x.length);
      }
    });
  }
}
