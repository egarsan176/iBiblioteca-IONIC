import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePageRoutingModule } from './detalle-routing.module';

import { DetallePage } from './detalle.page';
import { BibliotecaService } from '../biblioteca/biblioteca.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePageRoutingModule
  ],
  declarations: [DetallePage],
  providers: [
    BibliotecaService
  ]
})
export class DetallePageModule {}
