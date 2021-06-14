import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:ItemService) { }

  ngOnInit(): void {
  }

  displayItems():Item[]{
    return this.service.getStore();
  }

  addToCart(i:Item):void{
    this.service.addToCart(i);
  }
}
