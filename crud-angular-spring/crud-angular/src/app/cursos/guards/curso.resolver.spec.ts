import { TestBed } from '@angular/core/testing';

import { CursoResolver } from './curso.resolver';

describe('CourseResolver', () => {
  let resolver: CursoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CursoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
