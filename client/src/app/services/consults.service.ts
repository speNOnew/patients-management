import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Consult } from '../interfaces/consult';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultsService {

  API_ENDPOINT = 'http://localhost:8000/api';

  constructor(private http: Http) { }

  get(): Observable<Consult[]> 
  {
    return this.http.get(this.getUrl('/consults'), this.getOptions()).pipe(map(this.getDatos));
  }

  save(consult: Consult): Observable<Consult> 
  {
    return this.http.post(this.getUrl('/consults'), consult, this.getOptions()).pipe(map(this.getDatos));
  }

  // put(cite: Cite)
  // {
  //   return this.http.put(this.getUrl('/consults/') + cite.id, cite, this.getOptions());
  // }

  // delete(id)
  // {
  //   return this.http.delete(this.getUrl('/consults/') + id, this.getOptions());
  // }

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
