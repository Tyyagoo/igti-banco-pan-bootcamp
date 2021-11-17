import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ManageComponent } from "./manage/manage.component";
import { MenuComponent } from "./menu/menu.component";
import { OrderListComponent } from "./order-list/order-list.component";
import { OrderComponent } from "./order/order.component";
import { TrackerComponent } from "./tracker/tracker.component";

const routes: Routes = [
  { path: "orders/manage/:id", component: ManageComponent },
  { path: "orders/manage", component: OrderListComponent },
  { path: "orders/:id", component: TrackerComponent },
  { path: "orders", component: OrderComponent },
  { path: "menu", component: MenuComponent },
  { path: "", redirectTo: "menu", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
