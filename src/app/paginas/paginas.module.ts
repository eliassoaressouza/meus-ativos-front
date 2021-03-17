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
    AtivoModule
  ],
  exports: [HomeComponent, LayoutComponent, LoginComponent],
})
export class PaginasModule {}
