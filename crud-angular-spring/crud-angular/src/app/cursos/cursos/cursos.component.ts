import { Component } from '@angular/core';
import { Curso } from '../models/curso';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

import { CursosService } from '../services/cursos.service';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    CommonModule,
  ],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss',
})
export class CursosComponent {
  cursos$: Observable<Curso[]>;
  displayedColumns = ['nome', 'categoria'];

  constructor(private cursosService: CursosService) {
    this.cursos$ = this.cursosService.list();
  }
  NgOnInit(): void {}
}
