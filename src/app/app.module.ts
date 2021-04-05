import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PaginasModule } from "./paginas/paginas.module";
import { HttpClientModule } from "@angular/common/http";
import { DialogConfirmModule } from "./shared/dialog-confirm/dialog-confirm.module";
import { ClassificacaoModule } from "./components/classificacao/classificacao.module";
import {LOCALE_ID} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { CotacaoModule } from "./components/cotacao/cotacao.module";
registerLocaleData(localePt, 'pt');
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginasModule,
    DialogConfirmModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ClassificacaoModule,
    CotacaoModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
