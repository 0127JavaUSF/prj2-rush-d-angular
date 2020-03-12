import { Component, OnInit, NgModule } from '@angular/core';
import {Router} from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 
  username = '';
  password = '';
  credentials = {
    username: 'charles',
    password: 'password'
  }
  constructor(private loginService: LoginServiceService) { }

  login() {
    const result: any = this.loginService.performLogin(this.credentials)
    .subscribe(data => console.log(data));

    console.log(result);

    }

  ngOnInit(): void {
  }

}
