import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmployeeService } from './employee.service';
import { EmpDetailsComponent } from './emp-details/emp-details.component';

import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    EmpDetailsComponent,
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
