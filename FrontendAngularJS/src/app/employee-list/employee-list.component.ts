import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeService: EmployeeServiceService) {}

  ngOnInit() {
    this.employeService.getEmployees().subscribe((data: any) => {
      this.employees = data._embedded.employeeList;
    });
  }
}
