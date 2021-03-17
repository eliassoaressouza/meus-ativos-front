import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtivoComponent } from './ativo.component';
import { MatCardModule } from "@angular/material/card";
import { ListaCardAtivoComponent } from './lista-card-ativo/lista-card-ativo.component';
import { CardAtivoComponent } from './lista-card-ativo/card-ativo/card-ativo.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [  AtivoComponent,  ListaCardAtivoComponent, CardAtivoComponent ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatButtonModule
  ],
  exports:[ AtivoComponent]
})
export class AtivoModule { }
