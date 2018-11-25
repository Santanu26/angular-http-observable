import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-details',
  template: `
      <h2>Employee Details</h2>
      
      <ul *ngFor="let e of employees">
           <li>{{e.id}} | {{e.name}} | {{e.yearsOfExperience}}</li>
      </ul>
  `
})
export class EmpDetailsComponent implements OnInit {

  public employees = [];
  constructor(private empService: EmployeeService) { }

  ngOnInit() {

    this.empService.getEmployees().subscribe(data => this.employees = data);
  }

}
