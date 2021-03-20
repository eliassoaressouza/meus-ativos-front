import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/core/usuario/usuario';
import { UsuarioService } from 'src/app/core/usuario/usuario.service';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  usuario$: Observable<Usuario>;
  constructor( private usuarioService: UsuarioService) {
    this.usuario$ = usuarioService.getUser();

  }

  ngOnInit() {
  }

}
