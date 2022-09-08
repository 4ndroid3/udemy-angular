import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisSmall } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private _baseUrl: string = 'https://restcountries.com/v2';
  private _regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  get regiones(): string[] {
    return [...this._regiones];
  }
  // https://restcountries.com/v2/region/americas?fields=alpha3Code;name
  constructor(private http: HttpClient) { }

  getPaisesPorRegion( region: string ): Observable<PaisSmall[]> {
    const url = `${ this._baseUrl }/region/${ region }?fields=alpha3Code,name`;
    return this.http.get<PaisSmall[]>( url );
  }

}
