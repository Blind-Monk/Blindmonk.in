import { Routes } from '@angular/router';

export const SOFTWARE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./software-home/software-home.page').then(m => m.SoftwareHomePage)
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./services/services.page').then(m => m.ServicesPage)
  },
  {
    path: 'services/:slug',
    loadComponent: () =>
      import('./services/service-detail/service-detail.page').then(m => m.ServiceDetailPage)
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./products/products.page').then(m => m.ProductsPage)
  },
  {
    path: 'marketing',
    redirectTo: '/marketing',
    pathMatch: 'full'
  },
];
