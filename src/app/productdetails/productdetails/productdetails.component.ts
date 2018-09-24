import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { PageDescription } from './';
// import { ContentService } from '../';
declare var collapse: any;
declare var ContentRepalce: any;
declare var uncheckall: any;
declare var showcheckbox: any;


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
categorycollapse(){  // tslint:disable-next-line:no-unused-expression
  new collapse();
}
ContentReplace(){  // tslint:disable-next-line:no-unused-expression
  new ContentRepalce;
}
uncheckall(value1: number){
  // tslint:disable-next-line:no-unused-expression
  // alert(value1);
  // tslint:disable-next-line:no-unused-expression
  new uncheckall(value1);

}
showcheckbox(value2: string) {
  // tslint:disable-next-line:no-unused-expression
  new showcheckbox(value2);
}

}

