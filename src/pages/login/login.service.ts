import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise';
import {LoginClient} from "./login.client";

@Injectable()
export class LoginService {

  constructor(private loginClient: LoginClient) {
  }

  login(username: string, password: string) {

    this.loginClient.login(username, password).subscribe(res => {

    }, error => {
      console.log(error)
    });

  };
}
