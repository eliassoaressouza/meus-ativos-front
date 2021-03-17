import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AtivoService } from "src/app/core/http/ativo.service";
import { AtivoModel } from "src/app/models/ativo.model";
import {
  EventosGlobaisService,
  NomeEvento,
} from "src/app/shared/utils/eventos-globais.service";
import { AtivoModule } from "../../ativo.module";

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
    if (ativoSalvar._id) {
      this.ativoService.editar(ativoSalvar).subscribe(
        (resp) => {
          console.log(resp);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.ativoService.salvar(ativoSalvar).subscribe(
        (resp) => {
          console.log(resp);
        },
        (error) => {
          console.log(error);
        }
      );
    }
    this.ativoForm.reset();
    EventosGlobaisService.get(NomeEvento.AtualizarListaAtivos).emit();
  }
  ConfirmarExcluir() {
    const id=this.ativoForm.controls["_id"].value;
    console.log('**********************: '+id)
    this.ativoService.excluir(id).subscribe(
      (resp) => {
        console.log(resp);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
