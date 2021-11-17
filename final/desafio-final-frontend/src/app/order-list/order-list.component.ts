import { HttpClient } from "@angular/common/http";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { IListedOrders, IOrder } from "../types";

@Component({
  selector: "app-order-list",
  templateUrl: "./order-list.component.html",
  styles: [],
})
export class OrderListComponent implements OnInit, OnDestroy {
  subscription?: Subscription;
  ordersList?: IListedOrders;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.subscription = this.httpClient
      .get<IListedOrders>("http://localhost:8080/orders")
      .subscribe((obv) => (this.ordersList = obv));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  get sortedOrders(): IOrder[] {
    this.ordersList?.orders.sort((a, b) => {
      let timestamp1 = new Date(a.datetime);
      let timestamp2 = new Date(b.datetime);
      return timestamp2.valueOf() - timestamp1.valueOf();
    });

    return this.ordersList?.orders ?? [];
  }
}
