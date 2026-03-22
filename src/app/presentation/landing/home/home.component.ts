import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProductModel } from '../../../domain/models/product.model';
import { GetProductsUseCase } from '../../../domain/usecases/get-products.usecase';
import { BoxInfoComponent, CardComponent, CarrouselComponent } from '../../../shared/components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarrouselComponent, BoxInfoComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  readonly products = signal<ProductModel[]>([]);

  companies = [
    {
      companyName: 'Redbee Studios',
      position: 'Web/mobile Developer Ssr.',
      date: '03/2022 - Actualidad',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
    {
      companyName: 'Huenei It Services',
      position: 'Software Developer Ssr.',
      date: '07/2020 - 03/2022',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
    {
      companyName: 'Conexia S.A.',
      position: 'Java Developer Junior Advance',
      date: '03/2019 - 07/2020',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
    {
      companyName: 'Geco',
      position: 'Java developer trainee',
      date: '07/2018 - 10/2018',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
  ];

  constructor(private getProductsUseCase: GetProductsUseCase) {}

  ngOnInit() {
    this.getProductos();
  }

  getProductos() {
    this.getProductsUseCase
      .execute()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: res => this.products.set(res),
        error: error => console.error(error),
        complete: () => console.info('complete'),
      });
  }
}
