import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsComponent } from './gifs.component';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [GifsPageComponent, BusquedaComponent, ResultadosComponent],
  declarations: [GifsComponent, GifsPageComponent, BusquedaComponent, ResultadosComponent]
})
export class GifsModule { }
