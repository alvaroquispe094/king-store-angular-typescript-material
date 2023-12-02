import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-box-info',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './box-info.component.html',
  styleUrls: ['./box-info.component.scss'],
})
export class BoxInfoComponent {
  @Input() image?: string;
  @Input() title?: string;
  @Input() text?: string;
}
