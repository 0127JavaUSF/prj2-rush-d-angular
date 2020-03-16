import { Component, OnInit, NgModule } from '@angular/core';
import {Router} from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { GenericResponse } from 'src/app/genericResponse';
import { SessionService } from 'src/app/service/session.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username = '';
  password = '';

  showError = false;
  sessionResponse: GenericResponse;


  constructor( private cartService: CartService,
               private sessionService: SessionService, private loginService: LoginServiceService, private router: Router) { }

  login() {
    const credentialsSubmitted = {
      username: this.username,
      password: this.password
    }
    this.loginService.performLogin(credentialsSubmitted).subscribe(genericResponse => {
      console.log(genericResponse);
      console.log(typeof(genericResponse))
      if (genericResponse.response == 'User has been verified') {
        console.log('User credentials found');
        this.sessionService.setActive(true);
        this.router.navigate(['products']);
        this.cartService.custId = genericResponse.custId;
      }


    }, error =>
    console.log(error));
    this.showError = true;
}

  ngOnInit() {
  // route to products based on returned response, thus indicating an active session



  this.loginService.performSessionDetect()
  .subscribe(genericResponse => {
    console.log(genericResponse);
    console.log(typeof(genericResponse))
    if (genericResponse.response == 'User has active session') {
      console.log('Authorized cookie found');
      this.sessionService.setActive(true);
      this.router.navigate(['products']);
    }
  }, error => console.log(error));


  console.log('session not found');

  }

}


