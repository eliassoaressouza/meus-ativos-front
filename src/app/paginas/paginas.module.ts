import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent } from "./home/home.component";
import { LayoutComponent } from "./layout/layout.component";
import { LoginComponent } from "./login/login.component";
import { MatCardModule } from "@angular/material/card";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AtivoModule } from "../components/ativo/ativo.module";
import { IconeLoadingDefaultModule } from "../shared/progress/icones/icone-loading-default.module";
import { AlertCustomModule } from "../shared/alert-custom/alert-custom.module";
import { DialogConfirmModule } from "../shared/dialog-confirm/dialog-confirm.module";
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  declarations: [HomeComponent, LayoutComponent, LoginComponent],
  imports: [
    CommonModule,
    BrowserModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    AtivoModule,
    IconeLoadingDefaultModule,
    AlertCustomModule,
    DialogConfirmModule,
    MatExpansionModule
  ],
  exports: [HomeComponent, LayoutComponent, LoginComponent],
})
export class PaginasModule {}
