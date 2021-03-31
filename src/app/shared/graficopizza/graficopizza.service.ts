import {
  AtivoModel,
  ClassificacaoAtivoModel,
} from "src/app/models/ativo.model";

export class GraficoPizzaService {
  /**
   * [
      ['classificacao', 'valor'],
      ['Work', 11],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 7]
    ]
   *
   */
  static GerrarArray(listaAtivos: AtivoModel[]) {
    console.log("listaAtivos");
    console.log(listaAtivos);
    let arrayresp = [];
    arrayresp.push(["classificacao", "valor"]);

    let arrayclassificacao: ClassificacaoAtivoModel[] = [];

    listaAtivos.forEach((ativo) => {
      ativo.classificacao.forEach((element) => {
        arrayclassificacao.push(element);
      });
    });
    let jainclusos = [];
    arrayclassificacao.forEach((cl) => {
      let arraydados = this.Gerar(listaAtivos, "Setor", cl.tipo);

      let resp = jainclusos.filter((j) => j == arraydados[0]);

      if (arraydados[1] != 0 && !resp.length) {
        arrayresp.push(arraydados);
        jainclusos.push(arraydados[0]);
      }
    });

    console.log("arrayresp");
    console.log(arrayresp);
    return arrayresp;
  }

  static Gerar(listaAtivos: AtivoModel[], classinome: string, classitipo) {
    let soma = 0;

    listaAtivos.forEach((ativo) => {
      //verifica se o ativo tem a classificacao e o tipo necessario
      let ativoselecionado = ativo.classificacao.find(
        (c) => c.nome == classinome && c.tipo == classitipo
      );
      if (ativoselecionado && ativo.valor) {
        soma += ativo.valor;
      }
    });
    return [classinome + " " + classitipo, soma];
  }
}
