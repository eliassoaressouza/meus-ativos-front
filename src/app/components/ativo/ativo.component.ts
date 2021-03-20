import { Component, OnInit } from "@angular/core";
import { AtivoService } from "src/app/core/http/ativo.service";
import { AtivoModel } from "src/app/models/ativo.model";
import {
  EventosGlobaisService,
  NomeEvento,
} from "src/app/shared/utils/eventos-globais.service";
import { LoadingIconService } from "src/app/shared/utils/loading-icon.service";

@Component({
  selector: "ativo",
  templateUrl: "./ativo.component.html",
  styleUrls: ["./ativo.component.css"],
})
export class AtivoComponent implements OnInit {
  public listaAtivos: AtivoModel[] = [];
  constructor(private ativoService: AtivoService) {}

  ngOnInit() {
    this.obterLista();
    EventosGlobaisService.get(NomeEvento.AtualizarListaAtivos).subscribe(
      (resp) => {
        this.obterLista();
      }
    );
  }

  obterLista() {
    LoadingIconService.show();
    this.ativoService.obter().subscribe((resp) => {
      this.listaAtivos = resp;
      LoadingIconService.hide();
    },erro=>{
      LoadingIconService.hide();
    });
  }
}
