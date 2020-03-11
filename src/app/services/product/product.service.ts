import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private baseUrl = 'http://localhost:9009/products';
  
  constructor( private http: HttpClient) { }


  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getProductsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }



}
