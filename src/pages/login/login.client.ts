import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {UrlData} from "../../common/urldata";
import 'rxjs/add/operator/toPromise';
import {LoginFormData} from "./login.form.data";

@Injectable()
export class LoginClient {

  constructor(private http: Http,
              private urlData: UrlData) {
  }

  login(loginFormData:LoginFormData): Observable<string> {
    return this.http
      .post(this.urlData.baseUrl + `v1/login`, loginFormData)
      .map(response => response.json());
  };
}
