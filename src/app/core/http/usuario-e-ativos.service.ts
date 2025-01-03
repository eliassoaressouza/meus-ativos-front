import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AtivoModel } from "src/app/models/ativo.model";
import { UsuarioModel } from "src/app/models/usuario.model";
import { environment } from "src/environments/environment";
import { ServicoProtegidoTemplate } from "./servico-protegido-template";


@Injectable({ providedIn: 'root'})
export class UsuarioEAtivos extends ServicoProtegidoTemplate  {
  constructor(private http: HttpClient) {
    super();
}

public ObterLista(usuarioModel:UsuarioModel): Observable<UsuarioModel> {
  this.createHeaders();
  return this.http.post<UsuarioModel>(environment.apiUrl + "/usuario/obter",usuarioModel ,this.httpOptions);
}


}
