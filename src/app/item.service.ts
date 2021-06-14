import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {


  items:Item[] = [
    {
      name:"chips",
      id:1
    },
    {
      name:"soda",
      id:2
    },
    {
      name:"candy",
      id:3
    },
  ];

  getStore():Item[]{
    return this.items;
  }

  cart:Item[] = [];

  addToCart(i:Item):void{
    this.cart.push(i);
  }

  removeFromCart(i:Item):void{
    let index = this.cart.indexOf(i);
    this.cart.splice(index,1);
  }

  getCart():Item[]{
    return this.cart;
  }

  constructor() { }
}
