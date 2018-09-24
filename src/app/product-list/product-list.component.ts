import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input('product') public product;
  @Input('merchantID') public merchantID;
  // tslint:disable-next-line:no-output-rename
 @Output('imgModalUrl') public imgModalUrlEmiiter = new EventEmitter<string>();
  public imgUrl;
  public url = environment.apiUrl;
  public discount_price;
  public price;
  public productName;
  constructor() { }
  public ngOnInit() {
    if (!this.product) { return; }
    const { brief: { images: productImgs, price, name: productName }, pricing = {
      discount_price: price
    }, _id: productID } = this.product;
    this.productName = productName.length > 50 ? productName.slice(0, 50) + '...' : productName;
    this.price = price;
    this.discount_price = pricing.discount_price || price;
    this.imgUrl = `${this.url}/uploads/user/${this.merchantID}/products/${productID}/${productImgs[0]}`;
  }

  private outputImgUrl(e) {
    this.imgModalUrlEmiiter.emit(this.imgUrl);
    e.stopPropagation();
  }

}
