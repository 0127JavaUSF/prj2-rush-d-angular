import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private httpClient: HttpClient) { }



   url = `http://localhost:9009/login`;

// performLogin2(credentials: Object){
//   return this.httpClient.post(this.url, credentials).toPromise();
  
// }


performLogin (credentials: Object): Observable<HttpResponse<Config>>  {
  return this.httpClient.post(this.url, credentials, { observe: 'response' });
}

}
 


