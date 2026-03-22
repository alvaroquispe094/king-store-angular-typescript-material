import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { CartModel } from '../../../domain/models/cart.model';
import { CartService } from '../../common';

@Component({
    selector: 'app-item-cart',
    imports: [CommonModule],
    templateUrl: './item-cart.component.html',
    styleUrls: ['./item-cart.component.scss']
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
    this.size_items.emit(this._cartService.length());
  }

  removeItem() {
    this._cartService.remove(this.cart);
    this.size_items.emit(this._cartService.length());
  }

  cleanCart() {
    this._cartService.clean();
    this.size_items.emit(this._cartService.length());
  }
}
