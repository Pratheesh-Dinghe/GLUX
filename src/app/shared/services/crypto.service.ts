import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class CryptoService {
  private api = environment;
  coins= [
    {id: 1, name: 'BTC'},
    {id: 2, name: 'XRP'}
  ];
  constructor(public _httpClient: HttpClient) { }
  getMyItems(){
    return this.coins;
  }
}
