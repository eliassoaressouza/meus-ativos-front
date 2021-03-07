import { HttpHeaders } from '@angular/common/http';
import { TokenService } from '../token/token.service';
import { environment } from 'src/environments/environment';
export abstract class ServicoProtegidoTemplate {

    protected httpOptions: Object;
    protected httpHeaders: HttpHeaders;




    constructor() {

        this.createHeaders();

    }

    createHeaders() {



        this.httpHeaders = new HttpHeaders({

            "Content-Type": "application/json",
            "Authorization": `Bearer ${ TokenService.getToken()}`,

        });

        this.httpOptions = { headers : this.httpHeaders }

    }

}
