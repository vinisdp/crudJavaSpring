import { Curso } from './curso';

export interface CursoPage {
  cursos: Curso[];
  totalElements: number;
  totalPages: number;
}
