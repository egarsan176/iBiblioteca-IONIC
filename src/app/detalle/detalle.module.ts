import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePageRoutingModule } from './detalle-routing.module';

import { DetallePage } from './detalle.page';
import { BibliotecaService } from '../biblioteca/biblioteca.service';
import { StorageService } from '../biblioteca/storage.service';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [DetallePage],
  providers: [
    BibliotecaService,
    StorageService
  ]
})
export class DetallePageModule {}
