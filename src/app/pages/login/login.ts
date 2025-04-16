import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonInput,
  IonMenuButton,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { UserOptions } from '../../interfaces/user-options';
import { UserService } from '../../providers/user.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
  imports: [
    FormsModule,
    IonButton,
    IonButtons,
    IonCol,
    IonContent,
    IonHeader,
    IonInput,
    IonMenuButton,
    IonRow,
    IonTitle,
    IonToolbar,
  ],
})
export class LoginPage {
  private router = inject(Router);
  private user = inject(UserService);

  login: UserOptions = { username: '', password: '' };
  submitted = false;

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.user.login(this.login.username);
      this.router.navigateByUrl('/app/tabs/schedule');
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
