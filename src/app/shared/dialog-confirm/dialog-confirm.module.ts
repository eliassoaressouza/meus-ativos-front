import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogConfirmComponent, DialogLayoutComponent } from './dialog-confirm.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [DialogConfirmComponent,DialogLayoutComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports:[DialogConfirmComponent,DialogLayoutComponent],
  entryComponents:[DialogLayoutComponent]
})
export class DialogConfirmModule { }
