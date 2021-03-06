import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UsuarioModel } from "src/app/models/usuario.model";
import { ServicoProtegidoTemplate } from "./servico-protegido-template";


@Injectable({ providedIn: 'root'})
export class UsuarioEAtivos extends ServicoProtegidoTemplate  {
  constructor(private http: HttpClient) {
    super();
}

public ObterLista(usuarioModel:UsuarioModel): Observable<any> {
  this.createHeaders();
  return this.http.post<any>('http://localhost:3000' + "/usuario/obter",usuarioModel ,this.httpOptions);
}

}
