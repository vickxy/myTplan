import { BrowserModule } from '@angular/platform-browser';
import { NgModule, forwardRef, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';


import { AuthGuard } from './auth.guard';
import { AppComponent } from './app.component';
import { signUpComponent } from './form/signUp/signUp.component';
import { EmpService } from './employee.services';
import { HomeComponent } from './form/home/home.component';
import { AdminComponent } from './form/admin/admin.component';
import { StaffComponent } from './form/staff/staff.component';
import { GuestComponent } from './form/guest/guest.component';
import { NavbarComponent } from './form/navbar/navbar.component';
import { LogInComponent } from './form/log-in/log-in.component';
import { DemoComponent } from './form/demo/demo.component';
import { LogoutComponent } from './form/logout/logout.component';



@NgModule({
  declarations: [
    AppComponent,
    signUpComponent,
    HomeComponent,
    AdminComponent,
    StaffComponent,
    GuestComponent,
    NavbarComponent,
    LogInComponent,
    DemoComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [EmpService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
