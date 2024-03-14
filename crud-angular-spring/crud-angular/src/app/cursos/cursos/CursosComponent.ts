import { Component } from '@angular/core';
import { Curso } from '../models/curso';
import { MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss',
})
export class CursosComponent {
  cursos: Observable<Curso[]>;
  displayedColumns = ['nome', 'categoria'];

  constructor(private cursosService: CursosService) {
    this.cursos = cursosService.list();
  }
  NgOnInit(): void {}
}
