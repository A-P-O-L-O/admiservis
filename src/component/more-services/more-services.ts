import { Component } from '@angular/core';
import { MORESERVICES } from '../our-services/constants';
import { CommonModule } from '@angular/common';
import { ServiceHoverCard } from './service-hover-card/service-hover-card';

@Component({
  selector: 'app-more-services',
  imports: [CommonModule, ServiceHoverCard],
  templateUrl: './more-services.html',
  styleUrl: './more-services.scss'
})
export class MoreServices {

  services = MORESERVICES

}
