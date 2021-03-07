import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UsuarioService } from '../usuario/usuario.service';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UsuarioService) { }

  authenticate(userName: string, password: string) {

    return this.http
      .post(environment.apiUrl + '/auth/login',

        {"username": userName, "password": password},
        { observe: 'response'}
      )
      .pipe(tap(res => {
        const authToken = res.body;
        let json =authToken as bodyToken;
        this.userService.setToken(json.access_token);
        console.log(`User ${userName} authenticated with token ${authToken}`);
      }));
  }

}

export interface bodyToken{
  access_token:string
}
