import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../model/employee";
import {Customer} from "../model/customer";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {
  private employees: Employee[];  //tablica obiektów typu Employee
  private customers: Customer[];
  private welcomeMessage = 'Hello and welcome to employee app!';
  private dataServer = 'http://localhost:9999';
  atPage: number = 1;
  perPage = 10;
  maxPage: number = 0;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.loadEmployees();
    this.loadCustomers();
  }

  loadEmployees() {
    const url = this.dataServer + '/employees';
    this.http.get<Employee[]>(url)
      .subscribe(res=>{
        this.employees = res;
      })
  }

  loadCustomers() {
    const url = this.dataServer + '/customers';
    this.http.get<Customer[]>(url)
      .subscribe(res=>{
        this.customers = res;
        this.maxPage = Math.ceil(this.customers.length / this.perPage);
      })
  }

  max(number: number, number2: number) {
    return Math.max(number, number2);
  }

  min(number: number, number2: number) {
    return Math.min(number, number2)
  }
}
