import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.css']
})
export class ProductMenuComponent implements OnInit {

  constructor(private product:ProductService) { }
  // allProduct:Product = {
  //   name:"",
  //   productID:"",
  //   price:0
  // };
  // get allProducts():any{
  //   return this.product.inventory;
  // }
  allProducts:Product[] = [];
  
   ngOnInit(): void {
     this.allProducts = this.product.inventory;

  }

}
