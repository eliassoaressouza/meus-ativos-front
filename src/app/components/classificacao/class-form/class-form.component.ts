import { Component, OnInit } from "@angular/core";
import { ClassificacaoService } from "src/app/core/http/classificacao.service";
import { ClassificacaoModel } from "src/app/models/classificacao.model";
import { LoadingIconService } from "src/app/shared/utils/loading-icon.service";
import { MensagemService } from "src/app/shared/utils/modais.service";

@Component({
  selector: "class-form",
  templateUrl: "./class-form.component.html",
  styleUrls: ["./class-form.component.css"],
})
export class ClassFormComponent implements OnInit {
  classificacao: ClassificacaoModel;

  constructor(private classificacaoService: ClassificacaoService) {
    this.classificacao = new ClassificacaoModel();
  }

  ngOnInit() {}
  adicionarTipo(valorTipo) {
    if(valorTipo){
    if (!this.classificacao.tipo) {
      this.classificacao.tipo = [];
    }
    this.classificacao.tipo.push(valorTipo);
  }else{
    MensagemService.erro(
      "preencha o tipo!"
    );
  }
  }
  excluirTipo(valorTipo) {
    const index = this.classificacao.tipo.indexOf(valorTipo);
    if (index > -1) {
      this.classificacao.tipo.splice(index, 1);
    }
  }
  salvar() {

    if (this.classificacao.nome && this.classificacao.tipo.length) {
      LoadingIconService.show();
      this.classificacaoService.salvar(this.classificacao).subscribe(
        (resp) => {
          LoadingIconService.hide();
          MensagemService.sucesso("Ativo Salvo com sucesso!");
        },
        (error) => {
          console.log(error);
          LoadingIconService.hide();
        }
      );
    } else {
      MensagemService.erro(
        "Obrigatório nome da classificacao e inclusão de um tipo!"
      );
    }
  }
}
