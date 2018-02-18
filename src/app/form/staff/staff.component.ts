import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../employee.services';
import { Employee } from '../../employee';
import {ActivatedRoute, Params, Router, CanActivate} from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
constructor(
    private _empService:EmpService,
    private router: Router,
    private route: ActivatedRoute
   ) { }


  employees:any;
  ngOnInit() {
      this.getStaff();
  }
  id = this.route.snapshot.params['id'];
  getStaff(){
     this._empService
        .getStaffUtil()
        .subscribe(employees => {
          this.employees = employees;
      } )
        //console.log(this.employees);
  }

}
