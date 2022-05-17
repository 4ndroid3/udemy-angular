import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class CapitalService {

  private apiURL: string = 'https://restcountries.com/v2/';
  
  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {

    const url = `${ this.apiURL }/capital/${ termino }`;

    return this.http.get<Country[]>( url )
  }
}
