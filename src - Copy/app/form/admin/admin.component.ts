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
  ngOnInit() {
    this.getEmployees();
  }
  getEmployees(){
     this._empService
        .getEmployees()
        .subscribe(employees => {
          this.employees = employees;
      } )
  }
  deleteEmployee(id){
      this._empService
        .deleteEmployee(id)
        .subscribe(() => {
        this.getEmployees();
      } )
  }

}
