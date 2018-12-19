import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';
import { UserOptions } from '../../models';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignupPage implements OnInit {
  users: UserOptions[];
  signup: UserOptions = {
    username: '', password: '', email: '', favorites: []
  };
  confirmPassword = '';
  submitted = false;

  constructor(public router: Router,
              public userData: UserData,
              private userService: UserData) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (data: UserOptions[]) => { this.users = data; }
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
        this.userData.signup(this.signup);
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
