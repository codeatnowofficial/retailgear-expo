import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  aCustomers: any = ['Jeck', 'Nick', 'Erik'];
  aCountryList: any = [];
  selectedCountry: any;
  selectedCustomer: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.fetchCountry();
  }

  fetchCountry() {
    this.httpClient
      .get<any>('https://restcountries.com/v3.1/all')
      .subscribe((res: any) => {
        if (res?.length) {
          this.aCountryList = res;
        }
      });
  }
}
