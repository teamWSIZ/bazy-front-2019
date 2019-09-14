import { Component, OnInit } from '@angular/core';
import {Customer} from "../model/customer";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-customerbrowser',
  templateUrl: './customerbrowser.component.html',
  styleUrls: ['./customerbrowser.component.less']
})
export class CustomerbrowserComponent implements OnInit {
  customers: Customer[];
  url = 'http://localhost:3003/customers';
  editedMessage: Customer = new Customer();
  countries: string[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadCustomers();
  }

  private loadCustomers() {
    this.http.get<Customer[]>(this.url)
      .subscribe(res => {
        this.customers = res;
        const cou = new Set();
        for(let c of this.customers) {
          cou.add(c.country);
        }
        this.countries = Array.from<string>(cou);
      });
  }

  saveCustomer() {

  }
}
