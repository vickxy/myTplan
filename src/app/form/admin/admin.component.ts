import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../employee.services';
import { Employee } from '../../employee';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(
    private _empService:EmpService,
    private router: Router
   ) { }
  employees:any;
  status:number;
  num:number=1;
  ngOnInit() {
    this.getUsers();
    this.status = +localStorage.getItem('id');
  }
  getUsers(){
     this._empService
        .getUsersUtil()
        .subscribe(employees => {
          this.employees = employees;
      } )
    //console.log("this is tst");
  }
}
