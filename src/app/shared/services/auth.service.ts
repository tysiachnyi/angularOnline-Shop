import {Injectable, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthService{
  isAuth;
  constructor() {
  }

  login() {
    localStorage.setItem('login', 'true');
  }

  logout() {
    localStorage.clear();
    document.location.reload();
  }

  isAuthenticated() {
    if (localStorage.getItem('login') === 'true') {
      this.isAuth = true;
    }
    return new Promise<boolean>(resolve => {
      console.log(this.isAuth);
      resolve(this.isAuth);
    });
  }


}
