import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CotacaoComponent } from './cotacao.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule } from '@angular/material';



@NgModule({
  declarations: [CotacaoComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports:[CotacaoComponent]
})
export class CotacaoModule { }
