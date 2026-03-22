import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductModel } from '../../../domain/models/product.model';
import { CartModel } from '../../../domain/models/cart.model';
import { ItemCartComponent } from '../../../shared/components/item-cart/item-cart.component';
import { CartService } from '../../../shared/common';
import { BoxInfoComponent } from '../../../shared/components';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink, ItemCartComponent, BoxInfoComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products?: Array<ProductModel>;

  readonly items = signal<CartModel[]>([]);
  readonly total = computed(() =>
    this.items().reduce((sum, current) => sum + current.product.price * current.amount, 0)
  );
  readonly totalAmount = computed(() => this.items().length);

  constructor(private _cartService: CartService) {}

  ngOnInit(): void {
    this._cartService.currentDataCart$.subscribe(x => {
      if (x) {
        this.items.set([...x]);
      }
    });
  }

  refreshCart() {
    this.items.set([...this.items()]);
  }
}
