import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';
import { User } from '../../models';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignupPage implements OnInit {
  users: User[];
  signup: User = {
    username: '', password: '', email: '', favorites: []
  };
  confirmPassword = '';
  submitted = false;

  constructor(public router: Router,
              public userProvider: UserData) {}

  ngOnInit() {
    this.userProvider.getUsers().subscribe(
      (data: User[]) => { this.users = data; }
    );
  }

  onSignup(form: NgForm) {
    this.submitted = true;
    if (form.valid && this.signup.password === this.confirmPassword) {
      if (this.isNameUsed(this.signup.username)) {
        alert('Name is already taken.');
      } else if (this.isEmailUsed(this.signup.email)) {
        alert('Email is already taken.');
      } else {
        this.userProvider.signup(this.signup);
        this.router.navigateByUrl('/app/tabs/(schedule:schedule)');
      }
    }
  }

  isNameUsed(name) {
    return this.users.find(ur => ur.username.toLowerCase() === name.toLowerCase());
  }

  isEmailUsed(email) {
    return this.users.find(ur => ur.email.toLowerCase() === email.toLowerCase());
  }
}
