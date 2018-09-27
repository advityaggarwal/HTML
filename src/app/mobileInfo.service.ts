import {Injectable} from '@angular/core'; //import statement for injectable
import {HttpClient} from '@angular/common/http';    //import statement for HttpClient
import {Observable} from 'rxjs';              //import statement for Observable
import {IMobile} from './MobileInfo/mobile';  //interface imported for mobile data


@Injectable({
  providedIn: 'root'  //means that service is injected in the component
})
export class MobileInfoService {

  infoUrl='src/app/MobileInfo/mobile.json'; //Url for the JSON data

  constructor(private _http:HttpClient) { } //HttpClient is initialised

  getInfo():Observable<IMobile[]>
  {
    return this._http.get<IMobile[]>(this.infoUrl); //function for extracting data from JSON file
  }

}
