import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

declare var imageonclick: any;
declare var showslides: any;
declare var ShowAlert: any;

// @Component({
//   selector: 'app-productdescription',
//   templateUrl: './productdescription.component.html',
//   styleUrls: ['./productdescription.component.css']
// })
@Component({
  selector: "app-productdescription",
  templateUrl: "./productdescription.component.html",
  styleUrls: ["./productdescription.component.scss"]
})
export class ProductdescriptionComponent implements OnInit {
  productID: string;

  // constructor(route: ActivatedRoute) { // 2
  //   this.productID = route.snapshot.params['id'];
  // }

  constructor(private _Activatedroute: ActivatedRoute) {}

  //  constructor(route: ActivatedRoute) { // 2
  //   this.productID = route.snapshot.params['id']; // 3
  //  }

  ngOnInit() {}
  imageonclick() {
    // tslint:disable-next-line:no-unused-expression
    new this.imageonclick();
  }
  showslides() {
    new this.showslides();
  }
  ShowAlert() {
    new this.ShowAlert();
  }
}
