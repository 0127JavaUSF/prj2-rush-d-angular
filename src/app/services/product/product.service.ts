import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private baseUrl = 'http://localhost:9009/rush/products';

  constructor( private http: HttpClient) { }

  getProductList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getCat(category: String): Observable<any>{
    return this.http.get(`${this.baseUrl}/category/${category}`)
  }
}
