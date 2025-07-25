import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home'),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about'),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact'),
  },
];
