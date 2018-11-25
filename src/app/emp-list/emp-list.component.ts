import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-list',
  template: `
   <h2>Employee List</h2>
   <ul *ngFor="let e of employees">
       <li>{{e.name}}</li>
   </ul>
  `
})
export class EmpListComponent implements OnInit {

  public employees = [];

  constructor(private empService: EmployeeService) { }

  ngOnInit() {

    this.empService.getEmployees()
      .subscribe(data => this.employees = data);
    ;
  }

}
