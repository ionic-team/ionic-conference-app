import {Injectable} from "@angular/core";
@Injectable()
export class LoginFormData {
  public username: string;
  public password: string;
  public verificationCode: string;
  public type: string
}
