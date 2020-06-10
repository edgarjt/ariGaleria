import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Global} from './global';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; application/x-www-form-urlencoded; charset=UTF-8',
  }),
};

@Injectable()

export class EventosService {
  public url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = Global.url;
  }

  getEventos(): Observable<any> {

    return this.http.get(this.url + 'eventos' ,{ headers: httpOptions.headers });
  }

  getPlatica(): Observable<any> {

    return this.http.get(this.url + 'platicas' ,{ headers: httpOptions.headers });
  }

  getTaller(): Observable<any> {

    return this.http.get(this.url + 'talleres' ,{ headers: httpOptions.headers });
  }

  getExpo(): Observable<any> {

    return this.http.get(this.url + 'expociciones' ,{ headers: httpOptions.headers });
  }
}
