import { Component, Input, OnInit } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";


import { EventosGlobaisService, NomeEvento } from "../../utils/eventos-globais.service";
import { LoadingAscync } from "../../utils/loading-icon.service";

@Component({
  selector: "icone-loading-default",
  templateUrl: "icone-loading-default.html",
  styleUrls: ["icone-loading-default.scss"],
  animations: [
    trigger("state", [
      state(
        "show",
        style({
          height: "100%",
        })
      ),
      state(
        "hide",
        style({
          height: "0%",
        })
      ),
      transition("open <=> closed", animate("0.3s")),
    ]),
  ],
})
export class IconeLoadingDefault implements OnInit {
  public state: string = "hide";
  @Input() public global: boolean = true;
  private arrayHashRequisicoes = [];

  public show() {
    this.state = "show";
  }

  public hide() {
    this.state = "hide";
  }

  public toggle() {
    this.state = this.state == "show" ? "hide" : "show";
  }

  public alterarEstado(nomeEvento: string, state: string) {
    if (state === "show") {
      if (nomeEvento) {

        this.arrayHashRequisicoes.push(nomeEvento);
      }
      //altera o estado para show
      this.state = state;
    } else if (state === "hide") {
      //altera o estado para hide
      if (nomeEvento) {

        this.arrayHashRequisicoes.shift();
      }
      if (this.arrayHashRequisicoes.length == 0) {
        this.state = state;
      }
    }
  }

  ngOnInit() {
    if (this.global == true) {
      EventosGlobaisService.get(NomeEvento.loading_icon_default).subscribe(
        (loadingParams: LoadingAscync) => {
          this.alterarEstado(loadingParams.nomeEvento, loadingParams.state);
        }
      );
    }
  }
}
