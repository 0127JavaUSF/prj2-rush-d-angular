import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //checks if user is in an active session to render particular components
  

  constructor(private sessionService: SessionService, private cookieService: CookieService, private router:Router) { }
  clearCookies(){
    //clear cookies
    this.cookieService.delete('JWT');
    this.sessionService.setActive(false);
    this.router.navigate(['home']);


    
  }
  isLoggedIn(): boolean{
    return this.sessionService.getActive();
  }

  ngOnInit(): void {
  }


}
