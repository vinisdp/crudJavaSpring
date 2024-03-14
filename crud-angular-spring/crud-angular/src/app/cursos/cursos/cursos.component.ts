import { Component } from '@angular/core';
import { Curso } from '../models/curso';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatToolbarModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss',
})
export class CursosComponent {
  cursos: Curso[] = [];
  displayedColumns = ['nome', 'categoria'];

  constructor(private cursosService: CursosService) {}
  NgOnInit(): void {
    this.cursos = this.cursosService.list();
  }
}
