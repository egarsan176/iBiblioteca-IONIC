import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Biblioteca } from './biblio-interface';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  //url de la api
  private urlBase: string = "https://openlibrary.org";

  constructor(private httpClient : HttpClient) { }

  //devuelve el observable de tipo biblioteca
  getBibliotecaPeticion(): Observable<Biblioteca>{

    //guardo en una constante los parámetros del título y del límite de 7 
     const params = new HttpParams()
    .set('title', 'potter')
    .set('limit', '7');

    return this.httpClient.get<Biblioteca>(`${this.urlBase}/search.json`, {params: params});
  }
}
