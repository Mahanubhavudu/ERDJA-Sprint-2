import { Injectable } from '@angular/core';
//decorator is used to inject other dependecies into the service

export class EmployeeService {

  getEmployees(): any[]{
    return[
      {
        ID:'A101',FirstName : 'Sathvik', LastName : 'Korrapati',
        Department : 'Cloud', DOB : '29/03/1990', Gender : 'Female'
      },
      {
        ID:'A102',FirstName : 'Janga', LastName : 'Hrithik',
        Department : 'Cloud', DOB : '03/08/1992', Gender : 'Female'
      },
      {
        ID:'A103',FirstName : 'Dheeraj', LastName : 'Reddy',
        Department : '.net', DOB : '29/03/1995', Gender : 'Male'
      },
      {
        ID:'A104',FirstName : 'Mohammed', LastName : 'Uvais',
        Department : 'Developer', DOB : '08/12/1993', Gender : 'Male'
      },
      {
        ID:'A105',FirstName : 'Mahesh', LastName : 'Reddy',
        Department : 'Masters', DOB : '23/01/1995', Gender : 'Male'
      }
    ];
  }
}