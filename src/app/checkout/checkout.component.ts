import { Component, OnInit } from "@angular/core";
declare var showshippingaddr: any;
declare var isNumberKey: any;
declare var FillBilling: any;

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"]
})
export class CheckoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  showshippingaddr() {
    // tslint:disable-next-line:no-unused-expression
    new showshippingaddr();
  }

  isNumberKey() {
    new isNumberKey();
  }
  FillBilling() {
    new FillBilling();
  }
}
