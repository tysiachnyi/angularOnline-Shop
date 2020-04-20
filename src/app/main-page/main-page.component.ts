import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ProductService} from "../shared/services/product.service";
import {Product} from "../shared/models/interfaces";
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, OnDestroy {
  products: any = [];
  sub = Subscription;
  page: number;

  constructor(private productService: ProductService, private auth: AuthService) {
  }

  ngOnInit(){
    this.productService.getAll().subscribe((response: Product) => {
      this.products = response;
    });
    this.page = 1;
    this.auth.isAuthenticated();
  }


  ngOnDestroy() {
  }
}
