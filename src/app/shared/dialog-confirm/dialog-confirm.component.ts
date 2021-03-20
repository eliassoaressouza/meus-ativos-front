import { Component, Inject, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { DialogMsgService } from "./dialog-msg.service";
@Component({
  selector: "dialog-confirm",
  templateUrl: "./dialog-confirm.component.html",
  styleUrls: ["./dialog-confirm.component.css"],
})
export class DialogConfirmComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit() {

    DialogMsgService.escutarAbrirModalMsgConfirm().subscribe(resp=>{
     this.openDialog(resp.titulo,resp.textoMensagem,resp.callBackConfirmacao);
    })

  }
  openDialog(titulo:string,mensagem:string,callBackConfirmacao: () => void) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {

      title: titulo,
      mensagem: mensagem,
      callBackConfirmacao
    };
    this.dialog.open(DialogLayoutComponent, dialogConfig);
  }
}
@Component({
  selector: "dialog-layout",
  templateUrl: "./dialog-layout.html",
})
export class DialogLayoutComponent {
  mensagem;
  title;
  data:any;

  constructor(
    private dialogRef: MatDialogRef<DialogLayoutComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.mensagem = data.mensagem;
    this.title = data.title;
    this.data=data;
  }
  close() {
    this.dialogRef.close();
  }
  confirmar() {
    this.dialogRef.close();
    this.data.callBackConfirmacao();

  }
}
