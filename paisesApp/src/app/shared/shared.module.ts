import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    SidebarComponent,
    MenuComponent,
    FooterComponent
  ],
  declarations: [
    SidebarComponent,
    MenuComponent,
    FooterComponent
  ]
})
export class SharedModule { }
