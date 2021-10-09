import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  getTotalPrice() {
    return this.cartService.price();
  }

  getList() {
    return this.cartService.getList();
  }

  getCount() {
    return this.cartService.count();
  }

  clear() {
    this.cartService.clear();
  }
}
