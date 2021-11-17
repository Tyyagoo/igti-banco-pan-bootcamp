import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { OrderService } from "../order/order.service";
import { IMenu } from "../types";

type MaybeMenu = IMenu | undefined;

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styles: [],
})
export class MenuComponent implements OnInit {
  menu: MaybeMenu;

  constructor(
    private httpClient: HttpClient,
    public orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.httpClient
      .get<IMenu>("http://localhost:8080/products")
      .subscribe((obv) => (this.menu = obv));
  }
}
