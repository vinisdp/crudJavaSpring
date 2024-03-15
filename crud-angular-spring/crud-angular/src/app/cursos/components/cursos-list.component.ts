import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CategoriaPipe } from '../../shared/pipes/categoria.pipe';
import { Curso } from '../models/curso';

@Component({
  selector: 'app-courses-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, CategoriaPipe],
})
export class CursosListComponent implements OnInit {
  @Input() cursos: Curso[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor() {}

  ngOnInit(): void {}

  onAdd() {
    this.add.emit(true);
  }

  onEdit(curso: Curso) {
    this.edit.emit(curso);
  }

  onDelete(curso: Curso) {
    this.remove.emit(curso);
  }
}
