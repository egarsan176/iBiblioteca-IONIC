import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Biblioteca, Doc } from '../biblioteca/biblio-interface';
import { BibliotecaService } from '../biblioteca/biblioteca.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  ver: boolean = false;
  libro: Doc;

  constructor(private bibService : BibliotecaService,
              private activeRoute: ActivatedRoute) { }

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
      },
      error: e =>{
        console.log(e);
      }
    })
  }



}
