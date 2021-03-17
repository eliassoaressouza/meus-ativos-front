import { Component, OnInit } from "@angular/core";
import { UsuarioEAtivos } from "src/app/core/http/usuario-e-ativos.service";
import { AtivoModel } from "src/app/models/ativo.model";
import { UsuarioModel } from "src/app/models/usuario.model";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor() {}



  ngOnInit() {

  }
}
