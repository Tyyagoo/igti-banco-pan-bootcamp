import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AcompanheSeuPedidoComponent } from "./acompanhe-seu-pedido/acompanhe-seu-pedido.component";
import { CardapioComponent } from "./cardapio/cardapio.component";
import { PedidoComponent } from "./pedido/pedido.component";

const routes: Routes = [
  { path: "acompanhe/:id", component: AcompanheSeuPedidoComponent },
  { path: "cardapio", component: CardapioComponent },
  { path: "pedido", component: PedidoComponent },
  { path: "", redirectTo: "cardapio", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
