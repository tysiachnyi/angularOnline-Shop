import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';


@Injectable()

export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService,
              private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.isAuthenticated().then(isAuth => {
      if (isAuth) {
        return true;
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
}
