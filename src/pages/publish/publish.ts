import {Component} from '@angular/core';

import {Platform} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PublishService} from "./publish.service";


// declare var google: any;


@Component({
  selector: 'page-map',
  templateUrl: 'publish.html',
  providers: [PublishService]
})
export class PublishPage {
  public articleForm: FormGroup;

  constructor(public publishService: PublishService, public platform: Platform, public formBuilder: FormBuilder) {
    this.articleForm = this.formBuilder.group({
      title: ['', Validators.required],
      movieURL: [''],
      showPic: [''],
      content: ['', Validators.required]
    });
  }

  publish() {
    let data = this.articleForm.getRawValue();
    let resp = this.publishService.publish(data);
    console.log(resp)
  };

  cancel() {
  }

  ionViewDidLoad() {

  }
}
