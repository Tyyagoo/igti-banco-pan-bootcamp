import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { IProduct, IOrderItem, IOrder } from "../types";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  items: IOrderItem[] = [];

  constructor(private httpClient: HttpClient, private router: Router) {}

  finishOrder() {
    this.httpClient
      .post<IOrder>("http://localhost:8080/orders", this.items)
      .subscribe((obv) => this.router.navigateByUrl(`/orders/${obv.id}`));
  }

  addProduct(product: IProduct) {
    let item = this.items.find(
      (item) => item.product.description === product.description
    );

    item ? item.amount++ : this.items.push({ product, amount: 1 });
  }

  clearOrder() {
    this.items = [];
  }

  get totalPrice() {
    return this.items.reduce(
      (prev, curr) => prev + curr.product.price * curr.amount,
      0
    );
  }

  get totalQuantity() {
    return this.items.reduce((prev, curr) => prev + curr.amount, 0);
  }
}
