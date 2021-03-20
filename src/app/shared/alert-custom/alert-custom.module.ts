import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertCustomComponent } from './alert-custom.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [AlertCustomComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatFormFieldModule
  ],
  exports:[AlertCustomComponent]
})
export class AlertCustomModule { }
