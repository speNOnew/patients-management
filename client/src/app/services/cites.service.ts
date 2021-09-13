import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Cite } from '../interfaces/cite';
import { Citeshow } from '../interfaces/citeshow';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CitesService {

  API_ENDPOINT = 'http://localhost:8000/api';

  constructor(private http: Http) { }

  get(): Observable<Citeshow[]> 
  {
    return this.http.get(this.getUrl('/cites'), this.getOptions()).pipe(map(this.getDatos));
  }

  save(cite: Cite): Observable<Cite> 
  {
    return this.http.post(this.getUrl('/cites'), cite, this.getOptions()).pipe(map(this.getDatos));
  }

  put(cite: Cite)
  {
    return this.http.put(this.getUrl('/cites/') + cite.id, cite, this.getOptions());
  }

  delete(id)
  {
    return this.http.delete(this.getUrl('/cites/') + id, this.getOptions());
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
