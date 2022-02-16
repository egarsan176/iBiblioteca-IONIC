import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Doc } from '../biblioteca/biblio-interface';
import { BibliotecaService } from '../biblioteca/biblioteca.service';
import { StorageService } from '../biblioteca/storage.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  ver: boolean = false;
  libro: Doc;
  isFavorito: boolean = false;
  librosFav: Doc[] = [];

  constructor(private bibService : BibliotecaService,
              private activeRoute: ActivatedRoute,
              private storageService: StorageService) {}

  ngOnInit() {
    this.getLibro();  //para realizar la llamada a la petición en cuanto se cargue la página
    
  }

  getLibro(){
    this.bibService.getLibroPeticion(this.activeRoute.snapshot.params["isbn"])
    .subscribe({
      next: data =>{
        console.log(data)
        this.libro = data.docs[0];
        this.ver = true;
        this.checkFavorito(this.libro);
      },
      error: e =>{
        console.log(e);
      }
    })
  }

  addFavorito(storageKey: string, value: any){
    this.storageService.addFavoriteBook(storageKey, value);
    this.isFavorito = true;
    //console.log(this.storageService.getAllFavorites())
  }

  deleteFavorito(storageKey: string){
    this.storageService.deleteFavoriteBook(storageKey);
    this.isFavorito = false;
  }

  checkFavorito(libro: Doc){  
    this.storageService.findFavoriteBook(libro.isbn[2]).then(
      result => {
        if(result){
          this.isFavorito = true;
        }else{
          this.isFavorito = false;
        }
      }
    )
    

    
  }






}
