import { Component, OnInit, Output } from "@angular/core";
import { ClassificacaoService } from "src/app/core/http/classificacao.service";
import { ClassificacaoModel } from "src/app/models/classificacao.model";
import {
  EventosGlobaisService,
  NomeEvento,
} from "src/app/shared/utils/eventos-globais.service";
import { LoadingIconService } from "src/app/shared/utils/loading-icon.service";

@Component({
  selector: "app-classificacao",
  templateUrl: "./classificacao.component.html",
  styleUrls: ["./classificacao.component.css"],
})
export class ClassificacaoComponent implements OnInit {
  @Output() listaClassificacao: ClassificacaoModel[] = [];
  constructor(private classificacaoService: ClassificacaoService) {}

  ngOnInit() {
    this.listar();
    EventosGlobaisService.get(NomeEvento.AtualizarListaClassificacao).subscribe(
      (resp) => {
        this.listar();
      }
    );
  }
  listar() {
    LoadingIconService.show();
    this.classificacaoService.obter().subscribe(
      (resp) => {
        this.listaClassificacao = resp;
        LoadingIconService.hide();
      },
      (error) => {
        console.log(error);
        LoadingIconService.hide();
      }
    );
  }
}
