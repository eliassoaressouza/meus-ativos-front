import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/core/usuario/usuario';
import { UsuarioService } from 'src/app/core/usuario/usuario.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  usuario$: Observable<Usuario>;
  constructor( private usuarioService: UsuarioService,
    private router: Router) {
    this.usuario$ = usuarioService.getUser();

  }

  ngOnInit() {
  }

}
