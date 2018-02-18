import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../employee.services';
import { Employee } from '../../employee';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
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
        .getGuestUtil()
        .subscribe(employees => {
          this.employees = employees;
      } )
        //console.log(this.employees);
  }

}
