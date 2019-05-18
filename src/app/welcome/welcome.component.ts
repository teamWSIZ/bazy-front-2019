import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../model/employee";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {
  private employees: Employee[];  //tablica obiektów typu Employee
  private welcomeMessage = 'Hello and welcome to employee app!';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  loadEmployees() {
    const url = 'http://localhost:9999/employees';
    this.http.get<Employee[]>(url)
      .subscribe(res=>{
        this.employees = res;
      })
  }

}
