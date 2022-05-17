import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    VerPaisComponent,
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    PaisTablaComponent,
    PaisInputComponent
  ],
  exports: [
    VerPaisComponent,
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent
  ]
})
export class PaisModule { }
