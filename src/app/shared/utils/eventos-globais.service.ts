import { EventEmitter } from '@angular/core';


export class EventosGlobaisService {
  private static emitters: {
    [nomeEvento: string]: EventEmitter<any>;
  } = {};

  static get(nomeEvento: string): EventEmitter<any> {
    if (!this.emitters[nomeEvento])
      this.emitters[nomeEvento] = new EventEmitter<any>();
    return this.emitters[nomeEvento];
  }

  static erase(nomeEvento: string): void {
    if (!this.emitters[nomeEvento]) this.emitters[nomeEvento] = null;
  }
}
export enum NomeEvento {
  AtualizarListaAtivos = 'AtualizarListaAtivos',

}
