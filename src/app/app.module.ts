import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AutorPage } from './autor/autor.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent,
                  AutorPage],
  entryComponents: [AutorPage],
  imports: [BrowserModule, 
            IonicModule.forRoot(), 
            AppRoutingModule, 
            HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}


