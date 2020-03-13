import { Component, OnInit, NgModule } from '@angular/core';
import {Router} from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { GenericResponse } from 'src/app/genericResponse';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 
  username = '';
  password = '';
  // credentials = {
  //   username: 'charles',
  //   password: 'password'
  // }
  showError = false;
 


  constructor( private cookieService: CookieService, private loginService: LoginServiceService, private router: Router) { }

  async login() {
    let credentialsSubmitted = {
      username: this.username,
      password: this.password
    }
    const aresponse = await this.loginService.performLogin(credentialsSubmitted);

    if (aresponse.response == 'User has been verified') {
      console.log('getting jwt or nah?');

      this.router.navigate(['products']);
      
      this.showError = false;
    } 
    else {
      console.log('error being shown or nah?');
      this.showError = true;
      
    }


    
}

  async ngOnInit() {
  // route to products based on returned response, thus indicating an active session
  const sessionresponse = await this.loginService.performSessionDetect();
  console.log("session not found");
    // tslint:disable-next-line: triple-equals
  // if (sessionresponse.response == '"User has active session"') {
  //   console.log("Cookie found");
  //   this.router.navigate(['products']);
  //   }
  //   console.log("session not found");

  }

}
