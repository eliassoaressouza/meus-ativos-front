import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassificacaoComponent } from './classificacao.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClassFormComponent } from './class-form/class-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ContainerModule } from 'src/app/shared/container/container.module';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
@NgModule({
  declarations: [ClassificacaoComponent, ClassFormComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ContainerModule,
    MatButtonModule,
    MatListModule
  ],
  exports:[ClassificacaoComponent]
})
export class ClassificacaoModule { }
