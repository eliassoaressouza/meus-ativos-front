import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { AtivoService } from "src/app/core/http/ativo.service";
import { ClassificacaoService } from "src/app/core/http/classificacao.service";
import {
  AtivoModel,
  ClassificacaoAtivoModel,
} from "src/app/models/ativo.model";
import { ClassificacaoModel } from "src/app/models/classificacao.model";
import { DialogLayoutComponent } from "src/app/shared/dialog-confirm/dialog-confirm.component";
import { EventosGlobaisService, NomeEvento } from "src/app/shared/utils/eventos-globais.service";
import { LoadingIconService } from "src/app/shared/utils/loading-icon.service";
import { MensagemService } from "src/app/shared/utils/modais.service";

@Component({
  selector: "app-classificar-ativo",
  templateUrl: "./classificar-ativo.component.html",
  styleUrls: ["./classificar-ativo.component.css"],
})
export class ClassificarAtivoComponent implements OnInit {
  ativo: AtivoModel;
  listaClassificacao: ClassificacaoModel[] = [];

  classificacaoSelect: ICassificacao[] = [];

  constructor(
    private dialogRef: MatDialogRef<DialogLayoutComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private classificacaoService: ClassificacaoService,
    private ativoService: AtivoService
  ) {
    this.ativo = data.ativo;
  }

  ngOnInit() {
    this.listar();
  }
  listar() {
    //LoadingIconService.show();
    this.classificacaoService.obter().subscribe(
      (resp) => {
        this.listaClassificacao = resp;

        resp.forEach((classi) => {
          if (!this.classificacaoSelect || !this.classificacaoSelect.length) {
            this.classificacaoSelect = [{ nome: classi.nome }];
          } else {
            this.classificacaoSelect.push({ nome: classi.nome });
          }
        });

        //this.sele();


        this.obterClassificacaoDoAtivo();

        //LoadingIconService.hide();
      },
      (error) => {
        console.log(error);
        // LoadingIconService.hide();
      }
    );
  }
  classificar() {

    console.log("ativoclassificado!!!");

    this.ativo.classificacao = [];
    for (let index = 0; index < this.listaClassificacao.length; index++) {
      const classificacaoob = this.listaClassificacao[index];
      this.ativo.classificacao.push({
        nome: classificacaoob.nome,
        tipo: this.classificacaoSelect[index].nome,
      });

    }
    console.log(this.ativo);
    this.ativoService.editar(this.ativo).subscribe(
      (resp) => {

        LoadingIconService.hide();
        EventosGlobaisService.get(NomeEvento.AtualizarListaAtivos).emit();
        MensagemService.sucesso("Ativo Classificado com sucesso!");
      },
      (error) => {
        console.log(error);
        LoadingIconService.hide();
      }
    );
  }
  sele() {
    this.classificacaoSelect = [];
    this.classificacaoSelect.push({ nome: "medio" });
    this.classificacaoSelect.push({ nome: "Lajes Corporativas" });
  }
  obterClassificacaoDoAtivo() {
    if (this.ativo.classificacao) {
      this.classificacaoSelect = [];
      this.ativo.classificacao.forEach((element) => {
        this.classificacaoSelect.push({ nome: element.tipo });
      });
    }
  }
  testeClassificarAtivo() {
    this.ativo.classificacao = [];
    this.ativo.classificacao.push({ nome: "Risco", tipo: "medio" });
    this.ativo.classificacao.push({
      nome: "Setor",
      tipo: "Lajes Corporativas",
    });
  }
}

export interface ICassificacao {
  nome: string;
}
