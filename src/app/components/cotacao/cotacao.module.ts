import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CotacaoComponent } from './cotacao.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [CotacaoComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports:[CotacaoComponent]
})
export class CotacaoModule { }
