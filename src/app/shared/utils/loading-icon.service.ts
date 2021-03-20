import { EventosGlobaisService } from "./eventos-globais.service";

export class LoadingIconService {
  public static show(loadingAscync: LoadingAscync = null) {
    EventosGlobaisService.get("loading-icon-default").emit(
      this.LoadingNaoAscync(stateEnum.show)
    );
  }

  public static hide(loadingAscync: LoadingAscync = null) {
    EventosGlobaisService.get("loading-icon-default").emit(
      this.LoadingNaoAscync(stateEnum.hide)
    );
  }
  /**
   * Método para acionar o Componente de loading IconeLoadingDefault <icone-loading-default />
   * Deve se passar os parâmetros nome do evento pode ser uma string com o nome da função/método
   *  e estado “show” ou “hide”
   * @param loadingAscync
   */
  public static ascyncLoading(loadingAscync: ILoadingAscync) {
    EventosGlobaisService.get("loading-icon-default").emit(
      loadingAscync as LoadingAscync
    );
  }

  private static LoadingNaoAscync(state: stateEnum) {
    let loadingAscyncEntrada = new LoadingAscync(state, "");
    return loadingAscyncEntrada;
  }

  public static showHideAsyncLoading(
    nomeEvento: string,
    showOrHide: stateEnum
  ) {
    LoadingIconService.ascyncLoading({
      nomeEvento: nomeEvento,
      state: showOrHide,
    });
  }
}

export interface ILoadingAscync {
  nomeEvento: string;
  state: stateEnum;
}
export enum stateEnum {
  show = "show",
  hide = "hide",
}

export class LoadingAscync implements ILoadingAscync {
  nomeEvento: string;
  constructor(public state: stateEnum, nomeEvento: string) {
    this.nomeEvento = nomeEvento;
  }
}
