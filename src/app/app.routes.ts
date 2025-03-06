import { Routes } from '@angular/router';

export const routes: Routes = [];
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductsComponent },
  { path: 'servicios', component: ServicesComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
