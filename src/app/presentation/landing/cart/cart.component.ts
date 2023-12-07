import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductModel } from '../../../domain/models/product.model';
import { Subject } from 'rxjs';
import { CartService } from '../../../shared/common/cart.service';
import { CartModel } from 'src/app/domain/models/cart.model';
import { ItemCartComponent } from '../../../shared/components/item-cart/item-cart.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  private destroy$: Subject<void> = new Subject<void>();
  @ViewChild(ItemCartComponent) child: unknown;
  products?: Array<ProductModel>;

  size_items = 0;

  items: Array<CartModel> = [];
  total = 0;
  totalAmount = 0;

  constructor(private _cartService: CartService) {}

  ngOnInit(): void {
    this._cartService.currentDataCart$.subscribe(x => {
      if (x) {
        this.items = x;
        this.totalAmount = x.length;
        this.total = x.reduce((sum, current) => sum + current.product.price * current.amount, 0);
      }
    });
    this.size_items = this.items.length;
  }
}
