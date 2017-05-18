import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {UrlData} from "../../common/urldata";

@Injectable()
export class PublishService {

  constructor(private http: Http,
              private urlData: UrlData) {
  }

  publish(data: any) {
    return this.http
      .post(this.urlData.baseUrl + `v1/article`, data)
      .map(response => response).subscribe();
  }
}
