import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ClassificacaoModel } from "src/app/models/classificacao.model";
import { environment } from "src/environments/environment";
import { ServicoProtegidoTemplate } from "./servico-protegido-template";


@Injectable({ providedIn: 'root'})
export class ClassificacaoService extends ServicoProtegidoTemplate  {
  constructor(private http: HttpClient) {
    super();
}

public obter(): Observable<ClassificacaoModel[]> {
  this.createHeaders();
  return this.http.get<ClassificacaoModel[]>(environment.apiUrl + "/classificacao/obter",this.httpOptions);
}


public editar(Classificacao:ClassificacaoModel): Observable<any> {
  this.createHeaders();
  return this.http.post<any>(environment.apiUrl + "/classificacao/editar",Classificacao ,this.httpOptions);
}
public salvar(Classificacao:ClassificacaoModel): Observable<any> {
  this.createHeaders();
  return this.http.post<any>(environment.apiUrl + "/classificacao/salvar",Classificacao ,this.httpOptions);
}
public excluir(id:string): Observable<any> {
  this.createHeaders();

  return this.http.post<any>(environment.apiUrl + "/classificacao/excluir",{ _id:id},this.httpOptions);
}

}
