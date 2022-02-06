import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-busqueda',
  templateUrl: './input-busqueda.component.html',
  styleUrls: ['./input-busqueda.component.scss'],
})
export class InputBusquedaComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter(); //Para emitir un valor desde el componente hijo que pueda ser escuchado por el padre (biblioteca)

  busqueda: string = ''; //propiedad ngModel del formulario del input

  constructor() { }

  ngOnInit() {}

  verLibros(){
    this.onEnter.emit(this.busqueda); //para emitir el valor de la respuesta que será escuchado en el padre

  }

}
