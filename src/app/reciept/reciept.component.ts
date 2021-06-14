import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-reciept',
  templateUrl: './reciept.component.html',
  styleUrls: ['./reciept.component.css']
})
export class RecieptComponent implements OnInit {

  constructor(private service:ItemService) { }

  ngOnInit(): void {
  }

  getCart(): Item[] {
    return this.service.getCart();
  }

  getCartDistinct():Item[] {
    return this.service.getCart().filter((x, i, a) => a.indexOf(x) == i);
  }

  getCount(i:Item):number {
    let result = this.service.getCart().filter((item)=>{
      return item.id == i.id
    });
    console.log(result);
    console.log(i.id);
    return result.length;
  }
}
