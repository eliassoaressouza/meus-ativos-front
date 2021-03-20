import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AtivoService } from "src/app/core/http/ativo.service";
import { AtivoModel } from "src/app/models/ativo.model";
import { DialogMsgService } from "src/app/shared/dialog-confirm/dialog-msg.service";
import {
  EventosGlobaisService,
  NomeEvento,
} from "src/app/shared/utils/eventos-globais.service";
import { LoadingIconService } from "src/app/shared/utils/loading-icon.service";
import { MensagemService } from "src/app/shared/utils/modais.service";

@Component({
  selector: "card-ativo",
  templateUrl: "./card-ativo.component.html",
  styleUrls: ["./card-ativo.component.css"],
})
export class CardAtivoComponent implements OnInit {
  @Input() ativo: AtivoModel;
  labelBotaoSalvar: string;
  ativoForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private ativoService: AtivoService
  ) {}

  ngOnInit() {
    if (!this.ativo) {
      this.ativo = new AtivoModel();
    }

    this.ativoForm = this.formBuilder.group({
      nome: [this.ativo.nome, Validators.required],
      descricao: [this.ativo.descricao, Validators.required],
      _id: [this.ativo._id],
    });

    if (this.ativo == null) {
      this.ativo = new AtivoModel();
      this.ativo.nome = "ADICIONAR";
    }

    this.labelBotaoSalvar = this.ativo._id ? "Editar" : "Salvar";
  }
  SalvarAdicionar() {
    let ativoSalvar = new AtivoModel();

    ativoSalvar.nome = this.ativoForm.controls["nome"].value;
    ativoSalvar.descricao = this.ativoForm.controls["descricao"].value;
    ativoSalvar._id = this.ativoForm.controls["_id"].value;
    if (ativoSalvar.nome) {
      LoadingIconService.show();
      if (ativoSalvar._id) {
        this.ativoService.editar(ativoSalvar).subscribe(
          (resp) => {
            console.log(resp);
            LoadingIconService.hide();
            EventosGlobaisService.get(NomeEvento.AtualizarListaAtivos).emit();
            MensagemService.sucesso("Ativo Alterado com sucesso!");
          },
          (error) => {
            console.log(error);
            LoadingIconService.hide();
          }
        );
      } else {
        this.ativoService.salvar(ativoSalvar).subscribe(
          (resp) => {
            console.log(resp);
            LoadingIconService.hide();
            this.ativoForm.reset();
            EventosGlobaisService.get(NomeEvento.AtualizarListaAtivos).emit();
            MensagemService.sucesso("Ativo Salvo com sucesso!");
          },
          (error) => {
            console.log(error);
            LoadingIconService.hide();
          }
        );
      }
    } else {
      MensagemService.erro("Obrigatório nome ativo!");
    }
  }

  Excluir() {
    DialogMsgService.abrirModalMsgConfirm({
      titulo: "Atenção",
      textoMensagem:
        "Deseja excluir o ativo " +
        this.ativo.nome.toLocaleUpperCase() +
        " selecionado?",
      callBackConfirmacao: () => {
        this.ConfirmarExcluir();
      },
    });
  }

  ConfirmarExcluir() {
    const id = this.ativoForm.controls["_id"].value;
    LoadingIconService.show();
    this.ativoService.excluir(id).subscribe(
      (resp) => {
        console.log(resp);
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
}
