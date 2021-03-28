import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtivoClassificadoComponent } from './ativo-classificado.component';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [AtivoClassificadoComponent],
  imports: [
    CommonModule,
    BrowserModule,
    DragDropModule
  ],
  exports:[AtivoClassificadoComponent]
})
export class AtivoClassificadoModule { }
