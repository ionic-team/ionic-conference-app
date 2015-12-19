import {Component, View, FormBuilder, Control, ControlGroup, Validators, Output, EventEmitter} from 'angular2/angular2';
import {IONIC_DIRECTIVES} from 'ionic/ionic';

@Component({
  selector: "login-form"
})
@View({
  templateUrl: 'app/login/login-form.html',
  directives: [IONIC_DIRECTIVES]
})
export class LoginForm {
  loginForm: ControlGroup;
  username: Control = new Control("", Validators.required);
  password: Control = new Control("", Validators.required);

  @Output() formSubmitCallback = new EventEmitter();
  @Output() switchToSignupFormCallback = new EventEmitter();

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      "username": this.username,
      "password": this.password
    });
  }

  onLoginFormSubmitted(event) {
    event.preventDefault();

    if (this.loginForm.valid) {
      this.formSubmitCallback.next({
        username: this.username.value,
        password: this.password.value
      });
    }
  }

  onSignupButtonClicked(event) {
    event.preventDefault();
    this.switchToSignupFormCallback.next();
  }
}
