import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

// import { UserOptions } from '../../interfaces/user-options';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage implements OnInit{
  //login: UserOptions = { username: '', password: '' };
  //submitted = false;

  credentials: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController,
		private loadingController: LoadingController,
    private authService: AuthService,
    public userData: UserData,
    public router: Router
  ) { }

  //Easy access for form fields
  get email(){
    return this.credentials.get('email');
  }

  get password(){
    return this.credentials.get('password');
  }

  ngOnInit(){
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async register() {
		const loading = await this.loadingController.create();
		await loading.present();

		const user = await this.authService.register(this.credentials.value);
		await loading.dismiss();

		if (user) {
			this.router.navigateByUrl('/signup', { replaceUrl: true });
		} else {
			this.showAlert('Registration failed', 'Please try again!');
		}
	}

	async login() {
		const loading = await this.loadingController.create();
		await loading.present();

		const user = await this.authService.login(this.credentials.value);
		await loading.dismiss();

		if (user) {
			this.router.navigateByUrl('/app/tabs/schedule', { replaceUrl: true });
		} else {
			this.showAlert('Login failed', 'Please try again!');
		}
	}

  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  // onLogin(form: NgForm) {
    // this.submitted = true;

    // if (form.valid) {
      // this.userData.login(this.login.username);
      // this.router.navigateByUrl('/app/tabs/schedule');
    // }
  // }

  // onSignup() {
    // this.router.navigateByUrl('/signup');
  // }
}
