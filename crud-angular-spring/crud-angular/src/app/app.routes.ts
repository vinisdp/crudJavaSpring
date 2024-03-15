import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cursos' },
  {
    path: 'courses',
    loadChildren: () =>
      import('./cursos/cursos.routes').then((m) => m.COURSES_ROUTES),
  },
];
export { Routes };
