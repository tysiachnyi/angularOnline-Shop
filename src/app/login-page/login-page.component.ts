import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import validate = WebAssembly.validate;
import {Router} from '@angular/router';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(
      private router: Router,
      private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [
          Validators.required,
          Validators.email
      ]),
      password: new FormControl(null, [
          Validators.required,
          Validators.minLength(6)
      ])
    });
  }

  submit() {
      if (this.form.invalid) {
          return;
      }
      console.log(this.form.value);
      this.auth.login();
      this.form.reset();
      this.router.navigate(['/']);
  }

}
