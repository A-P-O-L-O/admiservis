import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-hover-card',
  imports: [CommonModule],
  templateUrl: './service-hover-card.html',
  styleUrl: './service-hover-card.scss'
})
export class ServiceHoverCard {

  @Input() title = '';
  @Input() description = '';
  @Input() icon = '';

}
