import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cookieService: CookieService, private router:Router) { }
  clearCookies(){
    //clear cookies
    this.cookieService.delete('JWT');
    //check to see if they were clear
    this.router.navigate(['home']);


    
  }

  ngOnInit(): void {
  }


}
