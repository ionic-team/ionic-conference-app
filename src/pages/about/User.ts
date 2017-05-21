import {Injectable} from "@angular/core";
import {DateTime} from "ionic-angular";

@Injectable()
export class User {


  public code: string;
  public username: string;
  public cellphone: string;
  public email: string;
  public nickName: string;
  public headPic: string;
  public smallHeadPic: string;
  public bigHeadPic: string;
  public idCard: string;
  public password: string;
  public age: string;
  public sex: string;
  public birthday: DateTime;
  public qq: string;
  public address: string;
  public nativePlace: string;
  public telPhone: string;
  public remark: string;
  public verificationCode: string;
  public disabled: string;
  public deleted: string;
  public status: string;
  public freezeTime: DateTime; //账号冻结时间

}
