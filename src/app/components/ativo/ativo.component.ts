import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { AtivoService } from "src/app/core/http/ativo.service";
import { CotacaoService } from "src/app/core/http/cotacao.service";
import { AtivoModel } from "src/app/models/ativo.model";
import { GraficoPizzaService } from "src/app/shared/graficopizza/graficopizza.service";
import { Calculo } from "src/app/shared/utils/calculo";
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
  public valortotal: any;
  dataGrafico: any;

  constructor(
    private ativoService: AtivoService,
    private cotacaoService: CotacaoService
  ) {}

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
    this.ativoService.obter().subscribe(
      (resp) => {
        this.IncluirCotacao(resp);
        this.listaAtivos = resp;

        LoadingIconService.hide();
      },
      (erro) => {
        LoadingIconService.hide();
      }
    );
  }
  IncluirCotacao(listaAtivosEntrada: AtivoModel[]) {
    this.cotacaoService.obter().subscribe((resp) => {
      listaAtivosEntrada.forEach((ativo) => {
        const cotacao = resp.find((a) => a.Ativo == ativo.nome);
        if (ativo.quantidade > 0 && cotacao) {
          ativo.valor =
            ativo.quantidade *
            Number(cotacao.Cotacao.replace("R$", "").trim().replace(",", "."));
        }
      });
      this.Calcular();
      this.GerarGraficoAtivos();
    });
  }
  Calcular() {
    this.valortotal = Calculo.obterValorTotal(this.listaAtivos);
  }

  GerarGraficoAtivos() {

    this.dataGrafico=GraficoPizzaService.GerrarArray(this.listaAtivos);
  }
}
