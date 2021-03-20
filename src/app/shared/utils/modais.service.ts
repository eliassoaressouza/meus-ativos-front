import { EventosGlobaisService, NomeEvento } from "./eventos-globais.service";

export class MensagemService {
  public static abrirModalMensagem(
    Mensagem: string = "Mensagem",
    iconeDoAlerta: string = "alerta"
  ) {
    EventosGlobaisService.get(NomeEvento.abrirModalMensagem).emit({
      Mensagem: Mensagem,
      iconeDoAlerta: iconeDoAlerta,
    });
  }

  public static sucesso(Mensagem: string = "Mensagem") {
    EventosGlobaisService.get(NomeEvento.abrirModalMensagem).emit({
      Mensagem: Mensagem,
      iconeDoAlerta: "sucesso",
    });
  }

  public static erro(Mensagem: string = "Mensagem") {
    EventosGlobaisService.get(NomeEvento.abrirModalMensagem).emit({
      Mensagem: Mensagem,
      iconeDoAlerta: "erro",
    });
  }

  public static alerta(Mensagem: string = "Mensagem") {
    EventosGlobaisService.get(NomeEvento.abrirModalMensagem).emit({
      Mensagem: Mensagem,
      iconeDoAlerta: "alerta",
    });
  }
}
export interface IMensagem {
  Mensagem: string;
  iconeDoAlerta: string;
}
