import { Component, Input, OnInit } from "@angular/core";
import { AtivoService } from "src/app/core/http/ativo.service";
import { AtivoModel } from "src/app/models/ativo.model";
import { DialogMsgService } from "src/app/shared/dialog-confirm/dialog-msg.service";
import {
  EventosGlobaisService,
  NomeEvento,
} from "src/app/shared/utils/eventos-globais.service";
import { LoadingIconService } from "src/app/shared/utils/loading-icon.service";
import { MensagemService } from "src/app/shared/utils/modais.service";
import { AtivoFormService } from "../ativo-form/ativo-form.service";
import { ClassificarAtivoService } from "../classificar-ativo/classificar-ativo.service";

@Component({
  selector: "lista-tabela-ativo",
  templateUrl: "./lista-tabela-ativo.component.html",
  styleUrls: ["./lista-tabela-ativo.component.css"],
})
export class ListaTabelaAtivoComponent implements OnInit {
  @Input() listaAtivos: AtivoModel[] = [];
  displayedColumns: string[] = [
    "nome",
    "quantidade",
    "valor",
    "descricao",
    "classificacao",
    "alterar",
    "excluir",
    "classificar",
  ];
  constructor(
    private ativoService: AtivoService,
    private classificarAtivoService: ClassificarAtivoService,
    private ativoFormService:AtivoFormService
  ) {}

  ngOnInit() {
    console.log(this.listaAtivos);
  }

  Alterar(ativo: AtivoModel) {
    this.ativoFormService.abrirDialog(ativo);
  }
  Salvar(){
    this.ativoFormService.abrirDialog(new AtivoModel());
  }
  ativoSelecionado: AtivoModel;
  Excluir(ativo: AtivoModel) {
    this.ativoSelecionado = ativo;
    DialogMsgService.abrirModalMsgConfirm({
      titulo: "Atenção",
      textoMensagem:
        "Deseja excluir o ativo " +
        ativo.nome.toLocaleUpperCase() +
        " selecionado?",
      callBackConfirmacao: () => {
        this.ConfirmarExcluir();
      },
    });
  }

  ConfirmarExcluir() {
    const id = this.ativoSelecionado._id;
    LoadingIconService.show();
    this.ativoService.excluir(id).subscribe(
      (resp) => {
        LoadingIconService.hide();
        MensagemService.sucesso("Ativo Excluido com sucesso!");
        EventosGlobaisService.get(NomeEvento.AtualizarListaAtivos).emit();
      },
      (error) => {
        console.log(error);
        LoadingIconService.hide();
      }
    );
  }
  Classificar(ativo: AtivoModel) {
    this.classificarAtivoService.abrirDialog(ativo);
  }
}
