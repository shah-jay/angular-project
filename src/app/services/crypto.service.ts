import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  // private apiUrl = 'https://product-app-74q6.onrender.com/products';
  private apiUrl = 'https://api4.binance.com/api/v3/ticker/24hr';
  

  constructor(private http: HttpClient) {}

  fetchCryptoData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  
}
