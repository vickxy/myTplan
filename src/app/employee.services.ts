import { Injectable } from '@angular/core';
import {ActivatedRoute, Params, Router, CanActivate} from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class EmpService {
  employees=[];
  constructor(private _http:Http, private router:Router) { }

  checkMe:any;
  checkMe1:any;
  id:number;
  teststatus:number;

  //This function is to store details from sign-up page to database
  addEmployee(info){
    console.log("service is called")
    return this._http.post("http://localhost/formValidation/signup.php",info)
      .map(()=>"");
  }

  login(info) : Observable<boolean>{
    console.log(info);
    return this._http.post("http://localhost/formValidation/login.php",info)
      .map(resp=>{
        this.checkMe1 = resp;
          localStorage.setItem('loginStatus', this.checkMe1.json().loginStatus);
          localStorage.setItem('id', this.checkMe1.json().ID);
          //console.log("checking");
          //console.log(localStorage.getItem('loginStatus'), "and", localStorage.getItem('id'));

        this.id = +localStorage.getItem('id');
        this.teststatus = +localStorage.getItem('loginStatus');

        if(this.teststatus == 0){
          if(this.id >=0){
            this.goGuest();
            return true;
          }
        }else if(this.teststatus==1){
          if(this.id >= 0){
            this.goStaff();
            return true;
          }
        }else if(this.teststatus==2){
          if(this.id >= 0){
            this.goAdmin();
            return true;
          }
        }else if(this.id == 0){
          this.goRegister();
        }else{
          console.log("error");
          var message = this.checkMe1.json().error;
          return false;
        }
      });
  }
 

  goGuest(){
    this.router.navigate(['/guest/id']);
  }
  goStaff(){
    this.router.navigate(['/staff/id']);
  }
  goAdmin(){
    this.router.navigate(['/admin/id']);
  }
  goRegister(){
    this.router.navigate(['/signUp']);
  }
  gotoLogin(){
    this.router.navigate(['/login']);
  }
  logout(){
    console.log( "log out function is called");
    localStorage.setItem('id', '-100');
    localStorage.setItem('loginStatus', '-111');
    console.log(+localStorage.getItem('loginStatus'));
    this.gotoLogin();
  }
//Admin: admin component displays entire list of guests
  getUsersUtil(){
    console.log(localStorage.getItem('loginStatus'));
    //console.log(localStorage.getItem('id'));
    if(+localStorage.getItem('loginStatus') == 2){
      return this.getUsers();
    }else{
      this.gotoLogin();
    }

  }
  getUsers(){
    return this._http.get("http://localhost/formValidation/select.php/")
      .map(res=>{
        this.checkMe = res;
        if(this.checkMe._body !== "0"){
           return res.json()
        }
       
      });
  }
  //Staff: staff component diplays detail of logged-in staff
  getStaffUtil(){
    if(+localStorage.getItem('loginStatus') == 1){
      var id = localStorage.getItem('id');
      return this.getLoggedInStaff(id);
    }else{
      this.gotoLogin();
    }
  }
  getLoggedInStaff(id){
    return this._http.post("http://localhost/formValidation/selectone.php/",{'id':id})
      .map(res=>res.json());
  }
  //Guest: guest component displays detail of logged-in guest
  getGuestUtil(){
      if(+localStorage.getItem('loginStatus') == 0){
      var id = localStorage.getItem('id');
      return this.getLoggedInGuest(id);
    }else{
      this.gotoLogin();
    }
  }

  getLoggedInGuest(id){
    return this._http.post("http://localhost/formValidation/selectOneGuest.php/", {'id':id})
      .map(res=>res.json());
  }

  // this function is to get entire list of staff for testing
  getStafff(){
    return this._http.get("http://localhost/formValidation/selectStaff.php/")
      .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json()
        }
       
      });
  }

  
}
