import { Component } from '@angular/core';
import { Curso } from '../models/curso';

import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss',
})
export class CursosComponent {
  cursos: Curso[] = [{ id: '1', nome: 'Angular', categoria: 'Front-End' }];
  displayedColumns = ['nome', 'categoria'];

  constructor() {}
  NgOnInit(): void {}
}
