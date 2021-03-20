import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { EventosGlobaisService, NomeEvento } from '../utils/eventos-globais.service';
import { IMensagem } from '../utils/modais.service';
@Component({
  selector: 'alert-custom',
  templateUrl: './alert-custom.component.html',
  styleUrls: ['./alert-custom.component.css']
})
export class AlertCustomComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) {


   }

  ngOnInit() {
    EventosGlobaisService.get(NomeEvento.abrirModalMensagem).subscribe(resp=>{
      resp = resp as IMensagem;
      this.openSnackBar(resp.Mensagem,'Atenção')

    })
  }
  openSnackBar(msg,acao ) {




    this._snackBar.open(msg, acao, {
      duration: 1000,
    });
  }

}
