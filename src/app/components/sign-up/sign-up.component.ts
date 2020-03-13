import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/classes/customer/customer';
import { CustomerService } from 'src/app/services/customers/customer.service';
import { Router } from '@angular/router';


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

  customer: Customer = new Customer();
  submitted = false;

  constructor(private customerService: CustomerService, 
    private router: Router) { }

  ngOnInit() {
  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }

  save() {
    this.customerService.createCustomer(this.customer)
    .subscribe(data => console.log(data), error => console.log(error));
    this.customer = new Customer();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['login'])
  }
}
