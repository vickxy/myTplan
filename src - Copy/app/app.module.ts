import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { signUpComponent } from './form/signUp/signUp.component';
import { EmpService } from './employee.services';
import { HomeComponent } from './form/home/home.component';
import { AdminComponent } from './form/admin/admin.component';
import { StaffComponent } from './form/staff/staff.component';
import { GuestComponent } from './form/guest/guest.component';
import { NavbarComponent } from './form/navbar/navbar.component';
import { LogInComponent } from './form/log-in/log-in.component';


@NgModule({
  declarations: [
    AppComponent,
    signUpComponent,
    HomeComponent,
    AdminComponent,
    StaffComponent,
    GuestComponent,
    NavbarComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
    providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
