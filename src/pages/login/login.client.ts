import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {UrlData} from "../../common/urldata";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginClient {

  constructor(private http: Http,
              private urlData: UrlData) {
  }

  login(username: string, password: string): Observable<string> {
    return this.http
      .post(this.urlData.baseUrl + `v1/login`, {username: username, password: password})
      .map(response => response.json());
  };
}
