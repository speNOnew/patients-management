import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
     private apiUrl = 'http://localhost:8000/api/';

     constructor(private http: Http) { }
 
login(usuario: Usuario): Observable<boolean> {

        let body = 'email=' + usuario.email + '&password=' + usuario.password;
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ 'headers': headers });
        let getlog = this.http.post(this.getUrl('login'), body, options).pipe(map(this.getDatos, this.getDatos2));
        return getlog;
    }
logout(): void {
        localStorage.removeItem('token');
    }
private error(error: any) {
        let msg = (error.message) ? error.message : 'Error desconocido';
        console.error(msg);
        Observable.throw(msg);
}

public getDatos(data: Response) {
    let datos = data.json();
    if (datos.token && datos.user['name']) {
        localStorage.setItem('token', datos.token);
        localStorage.setItem('user', datos.user['name']);
        return true;
    }
    return false;
}

//PRUEBA
public getDatos2(data: Response) {
    let datos = data.json();
    return datos.name;
}

private getUrl(modelo: String) {
    return this.apiUrl + modelo;
}

}


