import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductModel } from '../../../domain/models/product.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-smart-table',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    RouterModule,
  ],
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent implements OnChanges {
  displayedColumns!: string[];
  dataSource!: MatTableDataSource<ProductModel>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() columns!: string[];
  @Input() data!: ProductModel[];
  @Input() callbackFunction!: (id: number) => void;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnChanges(): void {
    this.displayedColumns = this.columns;
    const products = this.data;

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(products);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  updateProduct(id: number) {
    this.callbackFunction(id);
  }
}
