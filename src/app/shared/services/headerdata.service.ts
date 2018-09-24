import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderdataService {
  public get httpClient(): HttpClient {
    return this._httpClient;
  }
  public set httpClient(value: HttpClient) {
    this._httpClient = value;
  }
  private api = environment;
  constructor(
    private _httpClient: HttpClient
  ) { }
  public getFloor() {
    return this._httpClient.get(this.api.floorUrl);
  }
  public getBrands() {
    return this._httpClient.get(`${this.api.homeUrl}/brands`);
  }
  public getCategory() {
    return this._httpClient.get(`${this.api.productUrl}/category`);
  }
   public getAdLinks() {
    return this._httpClient.get(`${this.api.homeUrl}/ad-links`);
  }
   public getHotItem(name) {
   return this._httpClient.get(
   `${this.api.productUrl}/list/?select=brief/details/status/pricing/createdAt&limit=10&page=1&category=,${name}`);
  }
}
