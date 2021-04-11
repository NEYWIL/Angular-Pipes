import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//modulo personalizado

import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app
import localeCo from '@angular/common/locales/es-Co';
import localeFr from '@angular/common/locales/fr';

import {registerLocaleData} from '@angular/common';
registerLocaleData(localeCo);
registerLocaleData(localeFr);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
    
  ],
  providers: [
    {
      provide:LOCALE_ID,useValue:'es-co'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
