import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Produto, Pedido, ItemPedido } from "../types";

@Injectable({
  providedIn: "root",
})
export class PedidoService {
  itens: ItemPedido[] = [];

  constructor(private httpClient: HttpClient, private router: Router) {}

  fazerPedido() {
    this.httpClient
      .post<Pedido>("http://localhost:8080/pedidos", { itens: this.itens })
      .subscribe((obv) => {
        this.router.navigate(["acompanhe", obv.id]);
      });
  }

  adicionaProduto(produto: Produto) {
    let item = this.itens.find(
      (item) => item.produto.descricao === produto.descricao
    );
    if (item) {
      item.quantidade++;
    } else {
      this.itens.push({ produto, quantidade: 1 });
    }
  }

  limpaPedido() {
    this.itens = [];
  }

  get valorTotal() {
    let valor = 0;
    for (const item of this.itens) {
      valor += item.produto.preco * item.quantidade;
    }
    return valor;
  }

  get quantidadeTotal() {
    let quantidade = 0;
    for (const item of this.itens) {
      quantidade += item.quantidade;
    }
    return quantidade;
  }
}
