import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarrouselComponent {}
