import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.page').then(m => m.HomePage)
  },
  {
    path: 'hardware',
    loadComponent: () =>
      import('./features/hardware/hardware.page').then(m => m.HardwarePage)
  },
  {
    path: 'media',
    loadComponent: () =>
      import('./features/media/media.page').then(m => m.MediaPage)
  },
  {
    path: 'software',
    loadChildren: () =>
      import('./features/software/software.routes').then(m => m.SOFTWARE_ROUTES)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about.page').then(m => m.AboutPage)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.page').then(m => m.ContactPage)
  },
  { path: '**', redirectTo: '' },
];
