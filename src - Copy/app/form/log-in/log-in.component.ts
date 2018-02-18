import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../employee.services';
import { Employee } from '../../empLogin';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  //template:'<h1>{{loginstatus.login_status}}</h1>',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  constructor(
    private empService: EmpService,
     private router: Router) { }

  ngOnInit() {
  }


test_status:any;
model = new Employee();
  login(){
  	//console.log("addEmp called");
      this.empService
        .login(this.model)
        .subscribe(employees => {
          this.test_status = employees;
      } )
        //console.log(this.model.username, this.model.password);
        console.log(this.test_status);
  }
   goBack(){
    this.router.navigate(['/staff']);
  }
}