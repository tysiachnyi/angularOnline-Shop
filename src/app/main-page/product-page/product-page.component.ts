import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ProductService} from "../../shared/services/product.service";
import {Product} from "../../shared/models/interfaces";
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  products: any = [];
  allProducts: any = [];

  constructor(
      private route: ActivatedRoute,
      private productService: ProductService
              ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.productService.getAll()
          .pipe(
              map( (value) => {
                value = value.filter(arr => arr.SKU === params.id);
                return value
              })
          )
          .subscribe((response) => {
        this.products = response;
        console.log(this.products);
      })
        this.productService.getAll()
            .pipe(
            map( (value) => {
                value = value.filter(arr => arr.SKU !== params.id);
                return value
            })
            )
            .subscribe((response) => {
                console.log(response);
                this.allProducts = response;
            })
    })
  }

}
