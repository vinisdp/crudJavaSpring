import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor(private httpClient: HttpClient) {}

  list(): Curso[] {
    return [{ id: '1', nome: 'Angular', categoria: 'Front-End' }];
  }
}
