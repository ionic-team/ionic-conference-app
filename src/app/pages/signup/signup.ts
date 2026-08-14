import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonCol,
  IonRow
} from '@ionic/angular';

import { UserService } from '../../providers/user.service';

import { UserOptions } from '../../interfaces/user-options';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
  imports: [
    IonRow,
    IonCol,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
    IonInput,
    IonButton,
  ]
})
export class SignupPage {
  router = inject(Router);
  userService = inject(UserService);

  signup: UserOptions = { username: '', password: '' };
  submitted = false;

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userService.signup(this.signup.username);
      this.router.navigateByUrl('/app/tabs/schedule');
    }
  }
}
