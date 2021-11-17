import { HttpClient } from "@angular/common/http";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { parseStateOptions } from "../helpers";
import { IOrder } from "../types";

@Component({
  selector: "app-tracker",
  templateUrl: "./tracker.component.html",
  styles: [],
})
export class TrackerComponent implements OnInit, OnDestroy {
  interval?: ReturnType<typeof setInterval>;
  id?: number;
  subscription?: Subscription;

  order?: IOrder;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this.route.paramMap.subscribe((map) => {
      let val = map.get("id");
      this.id = val ? parseInt(val) : undefined;
      this.refresh();
      this.interval = setInterval(() => {
        this.refresh();
      }, 5000);
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    this.clearSubscription();
  }

  refresh() {
    console.log("refreshing order", this.id);
    if (this.id === undefined) return;
    this.clearSubscription();
    this.subscription = this.httpClient
      .get<IOrder>(`http://localhost:8080/orders/${this.id}`)
      .subscribe((obv) => (this.order = obv));
  }

  clearSubscription() {
    this.subscription?.unsubscribe();
    this.subscription = undefined;
  }

  getValueFromOrderStateKey(key: string) {
    return parseStateOptions().filter((opt) => opt.key === key)[0].value;
  }

  get totalPrice() {
    return this.order
      ? this.order.items.reduce(
          (prev, curr) => prev + curr.product.price * curr.amount,
          0
        )
      : 0;
  }
}
