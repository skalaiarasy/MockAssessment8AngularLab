import { Injectable } from '@angular/core';
import { Product } from 'src/app/product' 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  inventory:Product[] = [
    {name:'ABC',
    productID:'Car',
    price:7500
  },
  {name:'Ford',
    productID:'Car',
    price:12500
  },
  ];

  getAllProducts(){
    return this.inventory;
  }
}
