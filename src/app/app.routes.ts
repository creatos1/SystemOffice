
import { Routes } from '@angular/router';
import { SupporComponent } from './components/support/support';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: 'productos', loadComponent: () => import('./components/products/products.component').then(m => m.ProductsComponent) },
  { path: 'servicios', loadComponent: () => import('./components/services/services.component').then(m => m.ServicesComponent) },
  { path: 'contacto', loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent) },
  { path: 'soporte', loadComponent: () => import('./components/support/support').then(m => m.SupporComponent) }
];
