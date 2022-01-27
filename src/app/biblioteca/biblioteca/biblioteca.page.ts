import { Component, OnInit } from '@angular/core';
import { Biblioteca, Doc } from '../biblio-interface';
import { BibliotecaService } from '../biblioteca.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {



  constructor(private bibService: BibliotecaService) { }

  biblioteca: Doc[] = [];   //necesito declarar un array de Doc porque yo quiero guardar del objeto biblioteca la propiedad docs:  Doc[];

  ngOnInit() {
    this.getBiblioteca(); //para que se cargue el listado al iniciar la página
  }


  //me suscribo al método del servicio
  getBiblioteca(){
    this.bibService.getBibliotecaPeticion()
    .subscribe({
      next: data =>{
          console.log(data)
          this.biblioteca = data.docs;  //igualo mi variable a la propiedad docs[] de la respuesta
      },
      error: e =>{
          console.log(e)
      }
    })
    
  }

  

}
