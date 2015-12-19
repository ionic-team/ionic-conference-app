import {Component, View, FormBuilder, Control, ControlGroup, Validators, Output, EventEmitter} from 'angular2/angular2';
import {IONIC_DIRECTIVES} from 'ionic/ionic';

@Component({
  selector: "signup-form"
})
@View({
  templateUrl: 'app/signup/signup-form.html',
  directives: [IONIC_DIRECTIVES]
})
export class SignupForm {
  signupForm: ControlGroup;
  username: Control = new Control("", Validators.required);
  password: Control = new Control("", Validators.required);

  @Output() formSubmitCallback = new EventEmitter();

  constructor(fb: FormBuilder) {
    this.signupForm = fb.group({
      "username": this.username,
      "password": this.password
    });
  }

  onSignupFormSubmitted(event) {
    event.preventDefault();

    if (this.signupForm.valid) {
      this.formSubmitCallback.next({
        username: this.username.value,
        password: this.password.value
      });
    }
  }
}
