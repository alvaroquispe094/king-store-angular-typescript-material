import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { ProductModel } from '../../../domain/models/product.model';
import { CartService } from '../../common/cart.service';
import { CartModel } from '../../../domain/models/cart.model';
import { SnackBarService } from '../../common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatListModule, RouterModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnChanges {
  @Input() product!: ProductModel;

  cart!: CartModel;

  constructor(
    private _cartService: CartService,
    private _snackBarService: SnackBarService
  ) {}

  ngOnChanges(): void {
    this.cart = {
      product: this.product,
      amount: 0,
    };
  }

  addCart() {
    this._cartService.changeCart(this.cart);
    this._snackBarService.open('Added to cart!', 'success');
  }
}
