import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: Http) { }

  public userList(headers)
  {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    const response = this.http.get(url, headers).map(res => res.json());
    return response;
  }
}
