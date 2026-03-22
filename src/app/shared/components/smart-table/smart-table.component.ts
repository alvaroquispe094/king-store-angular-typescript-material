import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-smart-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent implements OnChanges {
  displayedColumns!: string[];
  filteredRows: Record<string, unknown>[] = [];
  filterValue = '';

  @Input() columns!: string[];
  @Input() data!: unknown[];
  @Input() callbackFunction!: (row: Record<string, unknown>) => void;

  ngOnChanges(): void {
    this.displayedColumns = this.columns;
    this.filteredRows = (this.data ?? []) as Record<string, unknown>[];
  }

  applyFilter() {
    const normalized = this.filterValue.trim().toLowerCase();
    const rows = (this.data ?? []) as Record<string, unknown>[];

    this.filteredRows = !normalized
      ? rows
      : rows.filter(row =>
          this.displayedColumns.some(column =>
            String(row[column] ?? '')
              .toLowerCase()
              .includes(normalized)
          )
        );
  }

  updateItem(row: Record<string, unknown>) {
    this.callbackFunction(row);
  }
}
