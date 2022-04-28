import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino = '';
  hayError: boolean = false;

  constructor( private paisService: PaisService ) { }

  ngOnInit() {
  }

  buscar() {
    this.hayError = false;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino)
    .subscribe( paises => {
      console.log( paises );
    }, (err) => {
      this.hayError = true;
    });
  }

}
