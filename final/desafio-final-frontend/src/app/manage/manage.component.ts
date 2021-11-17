import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IOrder } from "../types";
import { parseStateOptions, OrderKV } from "../helpers";

@Component({
  selector: "app-manage",
  templateUrl: "./manage.component.html",
  styles: [],
})
export class ManageComponent implements OnInit {
  id?: number;
  order?: IOrder;

  stateOptions: OrderKV[];
  selectedOption?: OrderKV;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
    this.stateOptions = parseStateOptions();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((map) => {
      let value = map.get("id");
      this.id = value ? parseInt(value) : undefined;

      this.id &&
        this.httpClient
          .get<IOrder>(`http://localhost:8080/orders/${this.id}`)
          .subscribe((order) => {
            // o ts e o angular me forçam a fazer gambiarra PQP
            this.selectedOption = this.stateOptions.filter(
              (opt) => opt.key === order.state
            )[0];
            this.order = order;
          });
    });
  }

  updateOrder() {
    console.log(this.selectedOption);
    this.order &&
      this.httpClient
        .put<IOrder>(`http://localhost:8080/orders/${this.order.id}`, {
          state: this.selectedOption?.key ?? this.order.state,
        })
        .subscribe((order) => (this.order = order));
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
