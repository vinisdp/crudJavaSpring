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
  cursos: Curso[] = [];
  displayedColumns: any;

  constructor() {}
  NgOnInit(): void {}
}
