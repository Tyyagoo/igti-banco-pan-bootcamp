import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private _snackBar: MatSnackBar
  ) {}

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
    this._openSnackBar(
      'Todos itens foram removidos do seu pedido.',
      'Esconder'
    );
  }

  finish() {
    this.cartService.clear();
    this._openSnackBar('O seu pedido foi concluído!', 'Esconder');
  }

  private _openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 2000 });
  }
}
