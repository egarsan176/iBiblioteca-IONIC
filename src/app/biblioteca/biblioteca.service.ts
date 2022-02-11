import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Biblioteca } from './biblio-interface';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  //url de la api
  private urlBase: string = "https://openlibrary.org/search.json";

  private urlBaseDetalle: string = "https://openlibrary.org/search.json?isbn="

  constructor(private httpClient : HttpClient) { }

  //devuelve el observable de tipo biblioteca
  getBibliotecaPeticion(busqueda: string): Observable<Biblioteca>{

    //guardo en una constante los parámetros del título y del límite de 10 
     const params = new HttpParams()
    .set('title', busqueda) //paso en el title el input del cuadro de búsqueda
    .set('limit', '7');

    return this.httpClient.get<Biblioteca>(this.urlBase, {params: params});
  }

  getLibroPeticion(libro: string){
      return this.httpClient.get<Biblioteca>(`${this.urlBaseDetalle}${libro}`);
  }
}