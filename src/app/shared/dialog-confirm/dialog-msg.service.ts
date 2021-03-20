import { Observable } from "rxjs";
import {
  EventosGlobaisService,
  NomeEvento,
} from "../utils/eventos-globais.service";

export class DialogMsgService {
  static abrirModalMsgConfirm(msgConfirm: IMsgConfirm) {
    EventosGlobaisService.get(NomeEvento.AbrirModalMsgConfirm).emit(msgConfirm);
  }

  static escutarAbrirModalMsgConfirm(): Observable<IMsgConfirm> {
    return EventosGlobaisService.get(NomeEvento.AbrirModalMsgConfirm);
  }
}
export interface IMsgConfirm {
  titulo: string;
  textoMensagem: string;
  callBackConfirmacao: () => void;
}
