import { EventosGlobaisService } from './eventos-globais.service';

export class ModaisService {

        public static abrirModalMensagem(
        Mensagem:string = "Mensagem",
        iconeDoAlerta:string = "alerta",
        desativarPerdaContexto=false) {
            EventosGlobaisService.get('abrirModalMensagem').emit({
                  Mensagem: Mensagem,
                  iconeDoAlerta: iconeDoAlerta,
                  desativarPerdaContexto:desativarPerdaContexto
                });

        }

        public static sucesso( Mensagem:string = "Mensagem",desativarPerdaContexto=false,NotificarInscritos=false) {
                EventosGlobaisService.get('abrirModalMensagem').emit({
                        Mensagem: Mensagem,
                        iconeDoAlerta: "sucesso",
                        desativarPerdaContexto:desativarPerdaContexto,
                        NotificarInscritos:NotificarInscritos
                });
        }

        public static erro( Mensagem:string = "Mensagem") {
                EventosGlobaisService.get('abrirModalMensagem').emit({
                        Mensagem: Mensagem,
                        iconeDoAlerta: "erro"
                });
        }

        public static alerta( Mensagem:string = "Mensagem") {
                EventosGlobaisService.get('abrirModalMensagem').emit({
                        Mensagem: Mensagem,
                        iconeDoAlerta: "alerta"
                });
        }

}
