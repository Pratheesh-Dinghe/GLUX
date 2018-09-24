import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
// import {provideRouter, ROUTER_DIRECTIVES} from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { ProductdetailsComponent } from "./productdetails/productdetails/productdetails.component";
import { ProductdescriptionComponent } from "./productdescription/productdescription.component";
import { ShoppingbagComponent } from "./shoppingbag/shoppingbag.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { SigninComponent } from "./signin/signin.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "newin", component: ProductdetailsComponent },
  { path: "productdesc/:id", component: ProductdescriptionComponent },
  { path: "shoppingbag/:id", component: ShoppingbagComponent },
  { path: "checkout/:id", component: CheckoutComponent },
  { path: "signin/:id", component: SigninComponent },
  { path: "**", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponet = [
  HomeComponent,
  ProductdetailsComponent,
  ProductdescriptionComponent,
  ShoppingbagComponent,
  CheckoutComponent,
  SigninComponent
];
export class DataService {
  public id: ProductdescriptionComponent;
}
