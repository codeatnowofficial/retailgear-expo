import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClient, HttpClientModule } from '@angular/common/http'; //
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';


@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    FormsModule,
    NgSelectModule,
    HttpClientModule,
    CommonModule,
    CustomersRoutingModule,
  ]
})
export class CustomersModule {
 }
