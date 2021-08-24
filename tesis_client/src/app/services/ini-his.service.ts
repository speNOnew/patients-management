import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Patient } from '../interfaces/patient';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IniHisService {

 API_ENDPOINT = 'http://localhost:8000/api';

  constructor(private http: Http) { }

  get(): Observable<Patient[]> 
  {
    return this.http.get(this.getUrl('/patients'), this.getOptions()).pipe(map(this.getDatos));
  }

  save(history: Patient): Observable<Patient> 
  {
    return this.http.post(this.getUrl('/patients'), history, this.getOptions()).pipe(map(this.getDatos));
  }

  put(history: Patient)
  {
    return this.http.put(this.getUrl('/patients/') + history.id, history, this.getOptions());
  }

  delete(id)
  {
    return this.http.delete(this.getUrl('/patients/') + id, this.getOptions());
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
