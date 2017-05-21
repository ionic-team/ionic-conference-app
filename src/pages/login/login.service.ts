import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise';
import {LoginClient} from "./login.client";
import {LoginFormData} from "./login.form.data";

@Injectable()
export class LoginService {

  constructor(private loginClient: LoginClient) {
  }

  login(loginFormData:LoginFormData) {
    this.loginClient.login(loginFormData).subscribe(res => {
      return res;
    }, error => {
      console.log(error)
    });

  };
}
