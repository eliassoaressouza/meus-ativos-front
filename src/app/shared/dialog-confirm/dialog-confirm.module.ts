import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogConfirmComponent, DialogLayoutComponent } from './dialog-confirm.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule, MatInputModule } from '@angular/material';


@NgModule({
  declarations: [DialogConfirmComponent,DialogLayoutComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule
  ],
  exports:[DialogConfirmComponent,DialogLayoutComponent],
  entryComponents:[DialogLayoutComponent]
})
export class DialogConfirmModule { }
