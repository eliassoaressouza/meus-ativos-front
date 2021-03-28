import { ClassificacaoModel } from "./classificacao.model";

export class AtivoModel{
  _id:string;
  idusuario:string;
  nome:string;
  quantidade:number;
  valor:number;
  descricao:string;
  classificacao:ClassificacaoAtivoModel[]


}

export class ClassificacaoAtivoModel{
  nome:string;
  tipo:string;

}
