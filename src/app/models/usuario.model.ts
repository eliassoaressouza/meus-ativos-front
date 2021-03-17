import { AtivoModel } from "./ativo.model";

export class UsuarioModel {
  _id: string;
  nome: string;
  email: string;
  ativos: AtivoModel[];
}
