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

export class ObrasService {
  public url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = Global.url;
  }

  getObras(): Observable<any> {

    return this.http.get(this.url + 'obras' ,{ headers: httpOptions.headers });
  }
}
