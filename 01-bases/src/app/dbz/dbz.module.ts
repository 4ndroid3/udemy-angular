import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MainPageComponent, PersonajesComponent, AgregarComponent],
  providers: [
    DbzService
  ],
  exports: [
    MainPageComponent,
  ]
})
export class DbzModule { }
