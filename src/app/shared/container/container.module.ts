import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import {MatDividerModule} from '@angular/material/divider';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    BrowserModule,
    MatDividerModule,
    MatInputModule
  ],
  exports:[ContainerComponent]
})
export class ContainerModule { }
