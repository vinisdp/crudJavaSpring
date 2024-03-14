import { Component } from '@angular/core';
import { Curso } from '../models/curso';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatToolbarModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss',
})
export class CursosComponent {
  cursos: Curso[] = [{ id: '1', nome: 'Angular', categoria: 'Front-End' }];
  displayedColumns = ['nome', 'categoria'];

  constructor() {}
  NgOnInit(): void {}
}
