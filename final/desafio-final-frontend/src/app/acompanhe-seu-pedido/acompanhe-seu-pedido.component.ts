import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Pedido } from "../types";

@Component({
  selector: "app-acompanhe-seu-pedido",
  templateUrl: "./acompanhe-seu-pedido.component.html",
  styles: [],
})
export class AcompanheSeuPedidoComponent implements OnInit {
  pedido: Pedido | undefined;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((obv) => {
      console.log(obv);
      this.httpClient
        .get<Pedido>(`http://localhost:8080/pedidos/${obv.id}`)
        .subscribe((pedido) => (this.pedido = pedido));
    });

    setInterval(this.refrescarPedido, 5000);
  }

  refrescarPedido() {
    this.httpClient
      .get<Pedido>(`http://localhost:8080/pedidos/${this.pedido?.id}`)
      .subscribe((pedido) => (this.pedido = pedido));
  }
}
