import { Component, OnInit } from '@angular/core';
declare var showshippingtype: any;

@Component({
  selector: 'app-shoppingbag',
  templateUrl: './shoppingbag.component.html',
  styleUrls: ['./shoppingbag.component.scss']
})
export class ShoppingbagComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showshippingtype(){  // tslint:disable-next-line:no-unused-expression
    new showshippingtype();
  }
}
