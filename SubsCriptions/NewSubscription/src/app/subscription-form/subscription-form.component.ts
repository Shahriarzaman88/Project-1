import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {


  firstName: string;
  lastName: string;
  emailAddress: string;
  companyName: string;


  constructor() { }

  ngOnInit(): void {
  }
  AddUser()
  {
    if(this.firstName == "admin")
    {
      alert("Admin Login");
      
      
    }
    else
    {
      alert("new login")
      
    
    }
  }

}
