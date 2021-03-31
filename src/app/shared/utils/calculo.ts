import { AtivoModel } from "src/app/models/ativo.model";

export class Calculo {
  public static obterValorTotal(listaativo: AtivoModel[]) {
    let total = 0;

    listaativo.forEach(ativo => {
      if(ativo.valor){
        total+=ativo.valor;
      }

    });

    return total;
  }

}
