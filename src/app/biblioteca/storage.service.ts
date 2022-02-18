import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Doc } from './biblio-interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  _favoritos: Doc[] = [];

  constructor(private storage: Storage) {
    this.init();
  }

  async init(){
    await this.storage.create();  //el await es la promesa que le estamos pidiendo que nos cree el localStorage
  }

  //para devolver un libro en concreto del localStorage
  async findFavoriteBook(storageKey: string){
    return await this.storage.get(storageKey);
  }

  //para añadir un libro al localStorage
  async addFavoriteBook(storageKey: string, value: any){
    return await this.storage.set(storageKey, value);
  }

  //para eliminar un libro del localStorage
  async deleteFavoriteBook(storageKey: string){
    return await this.storage.remove(storageKey);
  }

  //para vaciar el localStorage
  async deleteAllFavorites(){
    await this.storage.clear();
  }

  //para conseguir todos los libros favoritos
  async getAllFavorites(){

    this.storage.forEach((key, value) => {
      this._favoritos.push(key);
    }); 
  
    //console.log(this._favoritos)
    return this._favoritos;
  }

  //devuelve el listado de libros favoritos del servicio
  getFavoritos(){
    return [...this._favoritos]
  }


}
