import { Aula } from './aula';

export interface Curso {
  _id: string;
  nome: string;
  categoria: string;
  aulas?: Aula[];
}
