import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/auth/auth.service";
import { TokenService } from "src/app/core/token/token.service";
import { UsuarioModel } from "src/app/models/usuario.model";
import { ProgressService } from "src/app/shared/progress/progress.service";
import { LoadingIconService } from "src/app/shared/utils/loading-icon.service";
import { MensagemService } from "src/app/shared/utils/modais.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private tokenService:TokenService
  ) {}

  ngOnInit() {
    this.tokenService.removeToken();
    this.loginForm = this.formBuilder.group({
      usuario: ["", Validators.required],
      senha: ["", Validators.required],
    });
  }
  login() {
    LoadingIconService.show();
    const usuario = this.loginForm.get("usuario").value;
    const senha = this.loginForm.get("senha").value;

    this.authService.authenticate(usuario, senha).subscribe(
      () => {
        this.router.navigate(["home"]);
        LoadingIconService.show();
        MensagemService.sucesso('Usuario logado!');
      },
      (err) => {
        console.log(err);
        this.loginForm.reset();

        alert("Invalid email ou senha");
        LoadingIconService.hide()
      }
    );
  }
}
