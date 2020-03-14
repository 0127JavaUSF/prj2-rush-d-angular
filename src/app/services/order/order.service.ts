import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'http://localhost:9009/rush/orders'
  constructor(private http: HttpClient) { }
  getCustOrders(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
  getOrderItems(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}

