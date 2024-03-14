import { Routes } from '@angular/router';
import { CursosComponent } from './cursos/cursos/cursos.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cursos' },
  {
    path: 'cursos',
    loadChildren: () =>
      import('./cursos/cursos-routing.module').then(
        (m) => m.CursosRoutingModule
      ),
  },
];
