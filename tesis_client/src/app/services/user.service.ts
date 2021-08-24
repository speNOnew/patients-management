import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Usuario } from '../interfaces/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_ENDPOINT = 'http://localhost:8000/api';

  constructor(private http: Http) { }

  get(): Observable<Usuario[]> 
  {
    return this.http.get(this.getUrl('/users'), this.getOptions()).pipe(map(this.getDatos));
  }

  save(usuario: Usuario): Observable<Usuario> 
  {
    return this.http.post(this.getUrl('/users'), usuario, this.getOptions()).pipe(map(this.getDatos));
  }

  put(usuario: Usuario)
  {
    return this.http.put(this.getUrl('/users/') + usuario.id, usuario, this.getOptions());
  }

  delete(id)
  {
    return this.http.delete(this.getUrl('/users/') + id, this.getOptions());
  }

  private error(error: any) {
        let msg = (error.message) ? error.message : 'Error desconocido';
        console.error(msg);
        return Observable.throw(msg);
    }

    private getDatos(data: Response) {
        let datos = data.json();
        return datos || [];
    }
    private getUrl(modelo: String) {
        return this.API_ENDPOINT + modelo;
    }
    private getOptions(): RequestOptions {
        let auth = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
        let options = new RequestOptions({ headers: auth });
        return options;

    }
}
