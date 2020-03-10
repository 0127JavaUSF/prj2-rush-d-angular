import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  
  public accCreator: any = {
    firstName: '',
    lastName: '',
    accountName: '',
    password: '',
    passwordCheck: '',
    cardHoldName: '',
    cardNumber: '',
    expMo: '',
    expYr: '',
    cvv: '',

  }


  createAccValidation() {
    for (const key in this.accCreator) {
      // skip loop if the property is from prototype
      console.log(Object.entries(this.accCreator));
      
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
