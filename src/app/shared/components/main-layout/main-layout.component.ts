import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router, Event, NavigationStart, NavigationEnd, NavigationError, GuardsCheckEnd} from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {
  isAuth;

  constructor(
    public auth: AuthService,
    public router: Router
  ) { }



}
