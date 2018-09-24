import { Component, OnInit} from '@angular/core';
// import { forkJoin } from 'rxjs/observable/forkJoin';
import { forkJoin } from 'rxjs';
import { environment } from '../../environments/environment';
// import {HeaderService } from './../header/header.service';
import { HeaderdataService } from '../Shared/services/headerdata.service';
import {ContentService} from '../shared/services/content.service';
import {Router, ActivatedRoute } from '@angular/router';
import { privateDecrypt } from 'crypto';
import { errorHandler } from '../_helper/errorHandler';
import * as _ from 'lodash';
declare var mouseoverPass: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[HeaderdataService]
})
export class HeaderComponent implements OnInit {
  public url = environment.apiUrl;
  public categoryDisplay = [];
  public tabs = [
    'HOT',
    'DRESSES',
    'TOPS & TEES',
    'SKIRTS',
    'BOTTOMS',
    'INTIMATES',
    'PLUS SIZE',
  ];

  public images = [];
  public order;
  public floors;
  public hotItems;
  public forMobileDisplay = [];
  public brands = [];
  public links = [];
  public popular;
  constructor
  (
    public _headerservice: HeaderdataService,
    // public _searchService: SearchService,
    public _router: Router
  ) {
    _headerservice.getCategory().subscribe(
      (s: any) => {
        const array = s.map(c => c.path.split(',').filter(e => '' !== e));
        this.categoryDisplay = this.groupBy(_.groupBy(array, 0), 0);
        this.popular = this.categoryDisplay.pop();
      },
      e => errorHandler(e)
    );
    // _headerservice.getFloor().subscribe(
    //   (floorUI: Array<any>) => {
    //     this.order = floorUI.find(e => 'floor_order' === e.name).value;
    //     const floors = this.order.map(o => {
    //       return floorUI.find(x => x.name === 'floor_' + o);
    //     });
    //     forkJoin(
    //       floors.map(e => this._headerservice.getHotItem(e.value[0])))
    //       .subscribe((d: any) => {
    //         this.floors = floors
    //           .map(
    //             (e, i) => {
    //               this.forMobileDisplay = this.forMobileDisplay.concat(d[i]['docs'].slice(0, 3));
    //               return {
    //                 name: e.value[0],
    //                 tabs: e.value.slice(1),
    //                 // image: this.floors_old[i].image,
    //                 content: this.images,
    //                 hotItems: d[i]['docs']
    //               };
    //             },
    //             e => errorHandler(e));
    //       });
    //   },
    //   e => errorHandler(e)
    // );
    _headerservice.getBrands().subscribe((brands: any) => this.brands = brands.value);
    _headerservice.getAdLinks().subscribe((links: any) => this.links = links.value);

  }

  public groupBy(r, n) {
    if (3 === n) {
      return r;
    }
    return Object.keys(r).filter(e => 'undefined' !== e).map(k => {
      const e = _.groupBy(r[k], n + 1);
      const sub = this.groupBy(e, n + 1);
      return {
        name: k,
        sub: sub,
      };
    });
  }
  ngOnInit() {

  }

  f() { // tslint:disable-next-line:no-unused-expression
    new mouseoverPass();
  }
  public searchBrand(i) {
    this._router.navigate(['products'], { queryParams: { brand: this.brands[i] } });
  }
  public searchCategory(category: Array<string>) {
    const fullCategory = `,${category.join(',')}`;
    this._router.navigate(['products'], { queryParams: { category: encodeURIComponent(fullCategory) } });
  }

  // public getHotItem(name) {
  //   return this._httpClient.get(
  //     `${this.api.productUrl}/list/?select=brief/details/status/pricing/createdAt&limit=10&page=1&category=,${name}`);
  // }

}
