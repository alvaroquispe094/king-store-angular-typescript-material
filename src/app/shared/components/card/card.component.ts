import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-card',
    imports: [CommonModule],
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() image?: string;
  @Input() companyName?: string;
  @Input() position?: string;
  @Input() date?: string;
}
