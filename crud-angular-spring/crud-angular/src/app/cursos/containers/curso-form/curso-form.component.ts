import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  UntypedFormArray,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Curso } from '../../models/curso';
import { CursosService } from '../../services/cursos.service';
import { FormUtilsService } from './../../../shared/form/form-utils.service';
import { Aula } from './../../models/aula';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-course-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class CursoFormComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CursosService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute,
    public formUtils: FormUtilsService
  ) {}

  ngOnInit(): void {
    const curso: Curso = this.route.snapshot.data['curso'];
    this.form = this.formBuilder.group({
      _id: [curso._id],
      name: [
        curso.nome,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
      ],
      category: [curso.categoria, [Validators.required]],
      lessons: this.formBuilder.array(
        this.retrieveLessons(curso),
        Validators.required
      ),
    });
  }

  private retrieveLessons(curso: Curso) {
    const aulas = [];
    if (curso?.aulas) {
      curso.aulas.forEach((aula) => aulas.push(this.createAula(aula)));
    } else {
      aulas.push(this.createAula());
    }
    return aulas;
  }

  private createAula(aula: Aula = { id: '', nome: '', youtubeUrl: '' }) {
    return this.formBuilder.group({
      id: [aula.id],
      name: [
        aula.nome,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
      ],
      youtubeUrl: [
        aula.youtubeUrl,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(11),
        ],
      ],
    });
  }

  getAulasFormArray() {
    return (<UntypedFormArray>this.form.get('aulas')).controls;
  }

  addNewAula() {
    const aulas = this.form.get('aulas') as UntypedFormArray;
    aulas.push(this.createAula());
  }

  removeAula(index: number) {
    const aulas = this.form.get('aula') as UntypedFormArray;
    aulas.removeAt(index);
  }

  onSubmit() {
    if (this.form.valid) {
      this.service.salvar(this.form.value).subscribe(
        (result) => this.onSuccess(),
        (error) => this.onError()
      );
    } else {
      this.formUtils.validateAllFormFields(this.form);
    }
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Curso salvo com sucesso!', '', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar curso.', '', { duration: 5000 });
  }
}
