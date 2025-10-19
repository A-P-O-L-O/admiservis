import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('../component/home/home').then(m => m.Home),
  },
  {
    path: 'more',
    pathMatch: 'full',
    loadComponent: () => import('../component/more-services/more-services').then(m => m.MoreServices),
  },
  { path: '**', redirectTo: '' },
];
