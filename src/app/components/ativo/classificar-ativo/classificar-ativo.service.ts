import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AtivoModel } from 'src/app/models/ativo.model';
import { ClassificarAtivoComponent } from './classificar-ativo.component';

@Injectable({
  providedIn: 'root'
})
export class ClassificarAtivoService {

  constructor(private dialog: MatDialog) { }




  abrirDialog(ativo:AtivoModel) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      ativo
    };
    this.dialog.open(ClassificarAtivoComponent, dialogConfig);
  }
}
