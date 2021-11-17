import { Component, OnInit } from "@angular/core";
import { OrderService } from "./order.service";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styles: [],
})
export class OrderComponent implements OnInit {
  constructor(public orderService: OrderService) {}

  ngOnInit(): void {}
}
