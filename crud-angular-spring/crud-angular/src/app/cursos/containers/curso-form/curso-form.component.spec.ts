import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoFormComponent } from './curso-form.component';

describe('CourseFormComponent', () => {
  let component: CursoFormComponent;
  let fixture: ComponentFixture<CursoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursoFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
