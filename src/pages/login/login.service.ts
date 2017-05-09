import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {UrlData} from "../../common/urldata";

@Injectable()
export class LoginService {

  constructor(private http: Http,
              private urlData: UrlData) {
  }

  login(username: string, password: string): Observable<string> {
    console.log("login");
    debugger;
    return this.http
      .post(this.urlData.baseUrl + `login`, {username: username, password: password})
      .map(response => response.json().data as string);
  };
}
