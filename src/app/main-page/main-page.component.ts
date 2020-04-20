import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ProductService} from "../shared/services/product.service";
import {Product} from "../shared/models/interfaces";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, OnDestroy {
  products: Product = [];
  sub = Subscription;

  constructor(private productService: ProductService) {
  }

  ngOnInit(){
    // @ts-ignore
    this.productService.getAll().subscribe((response: Product) => {
      this.products = response;
      console.log(this.products);
    })
  }


  ngOnDestroy() {
    // if (this.pSub) {
    //   this.pSub.unsubscribe();
    // }

  }
}
