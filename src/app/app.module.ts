import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule} from '@ionic/angular';

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
  bootstrap: [AppComponent],
})
export class AppModule {}


