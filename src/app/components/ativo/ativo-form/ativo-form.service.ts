import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AtivoModel } from 'src/app/models/ativo.model';
import { AtivoFormComponent } from './ativo-form.component';


@Injectable({
  providedIn: 'root'
})
export class AtivoFormService {

  constructor(private dialog: MatDialog) { }

  abrirDialog(ativo:AtivoModel) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      ativo
    };
    this.dialog.open(AtivoFormComponent, dialogConfig);
  }
}
