import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    VerPaisComponent,
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent
  ],
  exports: [
    VerPaisComponent,
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent
  ]
})
export class PaisModule { }
