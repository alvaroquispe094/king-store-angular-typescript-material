import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProductModel } from 'src/app/domain/models/product.model';
import { GetProductsUseCase } from 'src/app/domain/usecases/get-products.usecase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private destroy$: Subject<void> = new Subject<void>();
  products?: ProductModel[];

  companies: any[] = [
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
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => (this.products = res),
        error: error => console.error(error),
        complete: () => console.info('complete'),
      });
  }
}
