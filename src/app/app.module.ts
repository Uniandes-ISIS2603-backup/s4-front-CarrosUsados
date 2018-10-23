import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarcaModule } from './marca/marca.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MarcaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
