import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { BarrasComponent } from './pages/barras/barras.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { DonaComponent } from './pages/dona/dona.component';

const routes: Routes = [
  {
    path: 'barras',
    component: BarrasComponent
  },
  {
    path: 'barras-doble',
    component: BarrasDobleComponent
  },
  {
    path: 'dona',
    component: DonaComponent
  },
  {
    path: 'dona-http',
    component: DonaHttpComponent
  },
  {
    path: '**',
    redirectTo: 'barras'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
