import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import {element} from 'protractor';
import { ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

customers:Customer[]=[

  {customerNo:1,name:'SAI SATHVIK',address:'Jalahalli',city:'Bangalore',state:'Karnataka',country:'India'},
  {customerNo:2,name:'HRITHIK REDDY',address:'Near Temple',city:'Nellore',state:'Andhra Pradesh',country:'India'},
  {customerNo:3,name:'DHEERAJ REDDY',address:'Near Inorbit Mall',city:'Hyderabad',state:'Telangana',country:'India'},
  
]
selectedCustomer:Customer =new Customer();

  constructor() { }

  ngOnInit(): void {
  }
showDetails(customer:Customer){
  this.selectedCustomer = Object.assign({},customer)
}

update(customer:Customer){
  console.log(customer)
  var cust = this.customers.find(e=>e.customerNo==customer.customerNo)
  Object.assign(cust,customer)
  alert("Customer Saved")
}
}