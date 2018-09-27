import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {IData} from './information/data'


@Injectable({
  providedIn: 'root'
})
export class InformationService {

  infoUrl='src/app/information/data.json';

  constructor(private _http:HttpClient) { }

  getInfo():Observable<IData[]>
  {
    return this._http.get<IData[]>(this.infoUrl);
  }

}
