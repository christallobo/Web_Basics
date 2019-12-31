import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees:Employee[]=new Array();
  constructor() {
    this.employees[0]=new Employee(101,"disha",20000);
    this.employees[1]=new Employee(102,"christal",30000);
    this.employees[2]=new Employee(103,"pooja",15000);
    this.employees[3]=new Employee(104,"ankita",25000);
   }
   findAllEmployee():Employee[]{
     return this.employees;
   }
}
