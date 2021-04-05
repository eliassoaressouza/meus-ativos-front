import { Component, OnInit } from "@angular/core";
import { CotacaoService } from "src/app/core/http/cotacao.service";
import { CotacaoModel } from "src/app/models/cotacao.model";
import { MensagemService } from "src/app/shared/utils/modais.service";

@Component({
  selector: "app-cotacao",
  templateUrl: "./cotacao.component.html",
  styleUrls: ["./cotacao.component.css"],
})
export class CotacaoComponent implements OnInit {
  cotacaomodel: string;
  listaCotacao: CotacaoModel[] = [];
  constructor(private cotacaoService: CotacaoService) {}

  ngOnInit() {
    this.listarCotacao();
  }
  listarCotacao() {
    this.cotacaoService.obter().subscribe((lista) => {
      this.listaCotacao = lista;
    });
  }
  Importar() {
    if (this.cotacaomodel) {
      const listaCotacaoObj = this.TransformaplanilhaGoogle();
      this.cotacaoService.salvareditar(listaCotacaoObj).subscribe(
        (resp) => {
          MensagemService.sucesso("Cotação atualizada com sucesso!");
          this.listarCotacao();
        },
        (erro) => {
          console.error(erro);
          MensagemService.erro(erro);
        }
      );
    } else {
      MensagemService.erro("Obrigatório preencher campo!");
    }
  }
  Teste() {
    const cotacao = new CotacaoModel();
    cotacao.Ativo = "ITAUSA";
    cotacao.Cotacao = "R$ 8";
    const cotlist = [];
    cotlist.push(cotacao);
    this.cotacaoService.salvareditar(cotlist).subscribe((resp) => {});
  }

  TransformaplanilhaGoogle(): CotacaoModel[] {
    const lista: CotacaoModel[] = [];

    const arrayOfLines = this.cotacaomodel.match(/[^\r\n]+/g);

    arrayOfLines.forEach((element) => {
      let cot = element.split(" ");
      lista.push({
        Ativo: cot[0].replace("R$", "").trim(),
        Cotacao: cot[1].trim(),
      });
    });
    return lista;
  }
}
