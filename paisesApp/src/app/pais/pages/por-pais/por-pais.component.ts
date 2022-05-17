import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino = '';
  hayError: boolean = false;
  country: Country[] = []

  constructor( private paisService: PaisService ) { }

  ngOnInit() {
  }

  buscar( termino: string ) {
    this.hayError = false;
    this.termino = termino
    this.paisService.buscarPais(termino)
    .subscribe( (paises: Country[]) => {
      this.country = paises;
    }, (err) => {
      this.hayError = true;
      this.country = []
    });
  }

  sugerencias( termino: string ) {
    this.hayError = false;
  }

}
