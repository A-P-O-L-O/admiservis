import { Component } from '@angular/core';
import { Skeleton } from 'primeng/skeleton';
import { Image } from 'primeng/image';

@Component({
  selector: 'app-us',
  standalone: true,
  imports: [Skeleton, Image],
  templateUrl: './us.html',
  styleUrl: './us.scss'
})
export class Us {
logos = [
    { alt: 'Simon',      src: 'assets/logos/simon.svg' },
    { alt: 'HomeSide',   src: 'assets/logos/homeside.svg' },
    { alt: 'Pangea',     src: 'assets/logos/pangea.svg' },
    { alt: 'Zeyve',      src: 'assets/logos/zeyve.svg' },
    { alt: 'HomeCrest',  src: 'assets/logos/homecrest.svg' }
  ];


}
