import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AtivoModel } from "src/app/models/ativo.model";
import { environment } from "src/environments/environment";
import { ServicoProtegidoTemplate } from "./servico-protegido-template";


@Injectable({ providedIn: 'root'})
export class AtivoService extends ServicoProtegidoTemplate  {
  constructor(private http: HttpClient) {
    super();
}

public obter(): Observable<AtivoModel[]> {
  this.createHeaders();
  return this.http.get<AtivoModel[]>(environment.apiUrl + "/ativo/obter",this.httpOptions);
}


public editar(ativo:AtivoModel): Observable<any> {
  this.createHeaders();
  return this.http.post<any>(environment.apiUrl + "/ativo/editar",ativo ,this.httpOptions);
}
public salvar(ativo:AtivoModel): Observable<any> {
  this.createHeaders();
  return this.http.post<any>(environment.apiUrl + "/ativo/salvar",ativo ,this.httpOptions);
}
public excluir(id:string): Observable<any> {
  this.createHeaders();

  return this.http.post<any>(environment.apiUrl + "/ativo/excluir",{ _id:id},this.httpOptions);
}

}
