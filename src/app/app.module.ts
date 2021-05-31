import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape/rodape.component';
import { QuemSomosComponent } from './historia/quem-somos/quem-somos.component';


@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    QuemSomosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
