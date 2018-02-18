import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmpService {
  employees=[];
  constructor(private _http:Http) { }
  checkMe:any;
  checkMe1:any;
  getEmployees(){
    return this._http.get("http://localhost/formValidation/select.php/")
      .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
          this.checkRes()
           return res.json()
        }
       
      });
  }
  checkRes(){
    console.log(this.checkMe);
  }
  addEmployee(info){
    console.log("service is called")
    return this._http.post("http://localhost/formValidation/insertAngular.php",info)
      .map(()=>"");
  }
  login(info){
    console.log(info);
    return this._http.post("http://localhost/formValidation/selectone.php",info)
      .map(resp=>{
        this.checkMe1 = resp;
       
        if(this.checkMe1._body !== "0"){
          this.check()
          return this.checkMe1
        }
       
      });
  }
  check(){
    //console.log(this.checkMe1);
  }
  getEmployee(id){
    return this._http.post("http://localhost/api/selectone.php/",{'id':id})
      .map(res=>res.json());
  }
  deleteEmployee(id){
    return this._http.post("http://localhost/api/delete.php/",{'id':id})
      .map(()=>this.getEmployees());
  }
  updateEmployee(info){
    return this._http.post("http://localhost/api/update.php/", info)
      .map(()=>"");
  }
}
