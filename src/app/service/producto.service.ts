import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Global} from './global';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; application/x-www-form-urlencoded; charset=UTF-8',
  }),
};

@Injectable()

export class ProductoService {
  public url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = Global.url;
  }

  getOAutores(): Observable<any> {

    return this.http.get(this.url + 'products' ,{ headers: httpOptions.headers });
  }
}
