import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './form/home/home.component';
import { AdminComponent } from './form/admin/admin.component';
import { signUpComponent } from './form/signUp/signUp.component';
import { GuestComponent } from './form/guest/guest.component';
import { StaffComponent } from './form/staff/staff.component';
import { LogInComponent } from './form/log-in/log-in.component';

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"admin", component:AdminComponent},
  {path:"staff", component:StaffComponent},
  {path:"guest", component:GuestComponent},
  {path:"signUp", component:signUpComponent},
  {path:"login", component:LogInComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
