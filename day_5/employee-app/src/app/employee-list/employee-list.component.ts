import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees:Employee[]=new Array();
  //method 1
  // service:EmployeeService;
  // constructor(service:EmployeeService){
  //    this.service=service;
  // }

  //method 2
  // private service:EmployeeService;
  // constructor(){
  //   this.service=new EmployeeService();
  // }

  //method 3
  constructor(private service:EmployeeService) {

   }

  ngOnInit(){
    this.employees=this.service.findAllEmployee();
  }

}
