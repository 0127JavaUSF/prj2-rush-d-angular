import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Config } from 'protractor';
import { Observable, throwError } from 'rxjs';

import { retry, catchError } from 'rxjs/operators';

import { GenericResponse } from '../genericResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private httpClient: HttpClient) { }
  public currentUser: GenericResponse = {
    response: ''

  }
  


   baseurl = `http://localhost:9009`;
   login = '/login';
   session = '/session';




performLogin(credentials: object): Observable<GenericResponse>{
  return this.httpClient.post<GenericResponse>(`${this.baseurl}/${this.login}`, credentials, {withCredentials: true});
}

performSessionDetect(): Observable<any>{
return this.httpClient.get(`${this.baseurl}/${this.session}`, { withCredentials: true });


}


}
