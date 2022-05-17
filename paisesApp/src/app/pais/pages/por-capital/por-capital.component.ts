import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { CapitalService } from '../../services/capital.service';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino = '';
  hayError: boolean = false;
  country: Country[] = []

  constructor( private capitalService: CapitalService ) { }

  ngOnInit() {
  }

  buscar( termino: string ) {
    this.hayError = false;
    this.termino = termino
    this.capitalService.buscarPais(termino)
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
