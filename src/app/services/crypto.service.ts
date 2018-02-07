import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CryptoService {
  private API: string = 'https://min-api.cryptocompare.com';

  constructor(private http: HttpClient) { }

  public getCoinList() {
    this.http.get(this.API + '/data/all/coinlist')
      .subscribe(data => {
        console.log(data);
    });
  }
}
