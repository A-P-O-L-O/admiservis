import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SERVICES } from './constants';
import { CardService } from '../card-service/card-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-services',
  imports: [ButtonModule, CardService],
  templateUrl: './our-services.html',
  styleUrl: './our-services.scss',
})
export class OurServices {

  constructor(private router: Router) { }


  services = SERVICES;

  goToServices() {
    this.router.navigate(['/more'])
  }


}
