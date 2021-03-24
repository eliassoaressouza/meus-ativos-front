import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PaginasModule } from "./paginas/paginas.module";
import { HttpClientModule } from "@angular/common/http";
import { DialogConfirmModule } from "./shared/dialog-confirm/dialog-confirm.module";
import { ClassificacaoModule } from "./components/classificacao/classificacao.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginasModule,
    DialogConfirmModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ClassificacaoModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
