import { Component, OnInit, NgModule } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor() { }

  login() {
    console.log("placeholder for subscribing to a service");

    }

  ngOnInit(): void {
  }

}
