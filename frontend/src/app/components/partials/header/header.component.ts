import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  cartQuantity=0;
  constructor(
    cartServvice:CartService
  ){
cartServvice.getCartObservable().subscribe((newCart)=>{
  this.cartQuantity= newCart.totalCount
})
  }
}
