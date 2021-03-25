import { Component, Input, OnInit } from '@angular/core';
import { ClassificacaoService } from 'src/app/core/http/classificacao.service';
import { ClassificacaoModel } from 'src/app/models/classificacao.model';
import { DialogMsgService } from 'src/app/shared/dialog-confirm/dialog-msg.service';
import { EventosGlobaisService, NomeEvento } from 'src/app/shared/utils/eventos-globais.service';
import { LoadingIconService } from 'src/app/shared/utils/loading-icon.service';
import { MensagemService } from 'src/app/shared/utils/modais.service';

@Component({
  selector: 'class-lista',
  templateUrl: './class-lista.component.html',
  styleUrls: ['./class-lista.component.css']
})
export class ClassListaComponent implements OnInit {

  @Input()listaClassificacao : ClassificacaoModel[]=[];
  displayedColumns: string[] = ['nome','tipos','editar','excluir'];
  _idClassificacao:string
  constructor(private classificacaoService:ClassificacaoService) { }

  ngOnInit() {

  }


  editar(classi){
    EventosGlobaisService.get(NomeEvento.EditarClassificacao).emit(classi);
  }


  Excluir(_id) {
    this._idClassificacao=_id;
    DialogMsgService.abrirModalMsgConfirm({
      titulo: "Atenção",
      textoMensagem:
        "Deseja excluir a classificacao " +
        _id +
        " selecionada?",
      callBackConfirmacao: () => {
        this.ConfirmarExcluir();
      },
    });
  }

  ConfirmarExcluir() {

    LoadingIconService.show();
    this.classificacaoService.excluir(this._idClassificacao).subscribe(
      (resp) => {

        LoadingIconService.hide();
        MensagemService.sucesso("Classificacao Excluida com sucesso!");
        EventosGlobaisService.get(NomeEvento.AtualizarListaClassificacao).emit();
      },
      (error) => {
        console.log(error);
        LoadingIconService.hide();
      }
    );
  }

}
