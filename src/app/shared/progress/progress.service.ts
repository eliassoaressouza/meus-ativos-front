import { EventosGlobaisService, NomeEvento } from "../utils/eventos-globais.service";

export class ProgressService{

  static ChamaProgress(ativo:boolean){
    EventosGlobaisService.get(NomeEvento.ProgressAtivo).emit(ativo);

  }


}
