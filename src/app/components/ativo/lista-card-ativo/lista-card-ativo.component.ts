import { Component, Input, OnInit } from '@angular/core';
import { CotacaoService } from 'src/app/core/http/cotacao.service';
import { AtivoModel } from 'src/app/models/ativo.model';

@Component({
  selector: 'lista-card-ativo',
  templateUrl: './lista-card-ativo.component.html',
  styleUrls: ['./lista-card-ativo.component.css']
})
export class ListaCardAtivoComponent implements OnInit {
  @Input() listaAtivos:AtivoModel[]=[];
  constructor() { }

  ngOnInit() {


  }

}
