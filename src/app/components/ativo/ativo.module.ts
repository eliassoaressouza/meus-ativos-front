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
import {MatInputModule} from '@angular/material/input';
import { TextMaskModule } from 'angular2-text-mask';
import { AtivoClassificadoModule } from '../ativo-classificado/ativo-classificado.module';
import { ClassificarAtivoComponent } from './classificar-ativo/classificar-ativo.component';
import {MatChipsModule} from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [  AtivoComponent,  ListaCardAtivoComponent, CardAtivoComponent, ClassificarAtivoComponent ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    TextMaskModule,
    AtivoClassificadoModule,
    MatChipsModule,
    MatDialogModule,
    MatSelectModule
  ],
  exports:[ AtivoComponent],
  entryComponents:[ClassificarAtivoComponent]
})
export class AtivoModule { }
