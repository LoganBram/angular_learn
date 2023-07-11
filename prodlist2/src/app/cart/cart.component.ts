import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  //now that you have imported and added constructor, you can use cartService methods
  //store items variable as all the carts items
  items = this.cartService.getItems()

  constructor(private cartService: CartService){}

}
