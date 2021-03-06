import { Component, OnInit } from "@angular/core";
import { UsuarioEAtivos } from "src/app/core/http/usuario-e-ativos.service";
import { UsuarioModel } from "src/app/models/usuario.model";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private usuarioEAtivos: UsuarioEAtivos) {}

  ngOnInit() {
    let user = new UsuarioModel();
    user._id="6031668d77b6b5530066161f";
    this.usuarioEAtivos.ObterLista(user).subscribe((resp) => {
      console.log(resp);
    });
  }
}
