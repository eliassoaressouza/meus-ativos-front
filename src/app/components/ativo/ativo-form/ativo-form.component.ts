import { Component, Inject, Input, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material";
import { AtivoService } from "src/app/core/http/ativo.service";
import { AtivoModel } from "src/app/models/ativo.model";
import {
  EventosGlobaisService,
  NomeEvento,
} from "src/app/shared/utils/eventos-globais.service";
import { LoadingIconService } from "src/app/shared/utils/loading-icon.service";
import { MensagemService } from "src/app/shared/utils/modais.service";

@Component({
  selector: "ativo-form",
  templateUrl: "./ativo-form.component.html",
  styleUrls: ["./ativo-form.component.css"],
})
export class AtivoFormComponent implements OnInit {
 ativo: AtivoModel;
  ativoForm: FormGroup;
  labelBotaoSalvar: string;
  constructor(
    private formBuilder: FormBuilder,
    private ativoService: AtivoService,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.ativo = data.ativo;

  }

  ngOnInit() {
    this.ativoForm = this.formBuilder.group({
      nome: [this.ativo.nome, Validators.required],
      descricao: [this.ativo.descricao, Validators.required],
      quantidade: [this.ativo.quantidade],
      _id: [this.ativo._id],
    });
    this.labelBotaoSalvar = this.ativo._id ? "Editar" : "Salvar";
  }
  SalvarAdicionar() {
    let ativoSalvar = new AtivoModel();

    ativoSalvar.nome = this.ativoForm.controls["nome"].value;
    ativoSalvar.quantidade = this.ativoForm.controls["quantidade"].value;
    ativoSalvar.descricao = this.ativoForm.controls["descricao"].value;
    ativoSalvar._id = this.ativoForm.controls["_id"].value;
    if (ativoSalvar.nome) {
      LoadingIconService.show();
      if (ativoSalvar._id) {
        this.ativoService.editar(ativoSalvar).subscribe(
          (resp) => {
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
}
