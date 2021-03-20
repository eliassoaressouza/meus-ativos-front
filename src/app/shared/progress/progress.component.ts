import { Component, Input, OnInit } from '@angular/core';
import { EventosGlobaisService, NomeEvento } from '../utils/eventos-globais.service';

@Component({
  selector: 'atv-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {


  progressAtivo:boolean;

  constructor() { }

  ngOnInit() {
    this.progressAtivo=false;
    EventosGlobaisService.get(NomeEvento.ProgressAtivo).subscribe(
      (resp) => {
        this.progressAtivo=resp;
      }
    );
  }

}
