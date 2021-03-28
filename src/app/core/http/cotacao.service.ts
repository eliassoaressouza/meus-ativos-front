import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AtivoModel } from "src/app/models/ativo.model";
import { CotacaoModel } from "src/app/models/cotacao.model";
import { environment } from "src/environments/environment";
import { ServicoProtegidoTemplate } from "./servico-protegido-template";


@Injectable({ providedIn: 'root'})
export class CotacaoService extends ServicoProtegidoTemplate  {
  constructor(private http: HttpClient) {
    super();
}

public obter(): Observable<CotacaoModel[]> {
  this.createHeaders();
  return this.http.get<CotacaoModel[]>(environment.apiUrl + "/cotacao/obter",this.httpOptions);
}


}
