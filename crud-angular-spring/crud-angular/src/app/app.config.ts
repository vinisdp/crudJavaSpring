import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CursosService } from './cursos/services/cursos.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { CategoriaPipe } from './shared/pipes/categoria.pipe';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    CursosService,
    importProvidersFrom(HttpClient),
    provideHttpClient(),
    CategoriaPipe,
  ],
};
