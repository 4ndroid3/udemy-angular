import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {
  cambiarBooleano = true
  constructor() { }

  ngOnInit(): void {
  }

  cambiar() {
    this.cambiarBooleano = !this.cambiarBooleano;
  }

}
