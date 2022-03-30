import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Hulk', 'Spiderman', 'Ironman', 'Thor']
  heroeBorrado: string = '';
  constructor() { }

  ngOnInit() {
  }

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
